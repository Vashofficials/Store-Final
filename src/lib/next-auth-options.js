// dynamicSettings.js

import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";

import SettingServices from "@services/SettingServices";
import CustomerServices from "@services/CustomerServices";

export const getDynamicAuthOptions = async () => {
  const storeSetting = await SettingServices.getStoreSetting();

  const providers = [
    Google({
      clientId: storeSetting?.google_id || "",
      clientSecret: storeSetting?.google_secret || "",
    }),
    GitHub({
      clientId: storeSetting?.github_id || "",
      clientSecret: storeSetting?.github_secret || "",
    }),
    Facebook({
      clientId: storeSetting?.facebook_id || "",
      clientSecret: storeSetting?.facebook_secret || "",
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const userInfo = await CustomerServices.loginCustomer(credentials);
        return userInfo;
      },
    }),
  ];

  const authOptions = {
    providers,
    callbacks: {
      async signIn({ user, account }) {
        if (account.provider !== "credentials") {
          try {
            const res = await CustomerServices.signUpWithOauthProvider(user);

            // if (error) {
            //   console.error("OAuth sign-in error:", error);
            //   return false;
            // }

            if (res.token) {
              user.token = res.token;
              user._id = res._id;
              user.address = res.address;
              user.phone = res.phone;
              user.image = res.image;
            } else {
              console.error("OAuth sign-in: No token received");
              return false;
            }
          } catch (error) {
            console.error("OAuth sign-in exception:", error);
            return false;
          }
        }
        return true;
      },
      async jwt({ token, user, trigger, session }) {
        if (user) {
          token.id = user._id;
          token.name = user.name;
          token.email = user.email;
          token.address = user.address;
          token.phone = user.phone;
          token.image = user.image;
          token.token = user.token;
        }

        if (trigger === "update" && session) {
          return {
            ...token,
            ...session.user,
          };
        }

        return token;
      },
      async session({ session, token }) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.address = token.address;
        session.user.phone = token.phone;
        session.user.image = token.image;
        session.user.token = token.token;

        return session;
      },
      async redirect({ url, baseUrl }) {
        // console.log("url", url, "baseUrl", baseUrl);
        return url.startsWith(baseUrl) ? url : `${baseUrl}/user/dashboard`;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
  };

  return authOptions;
};
