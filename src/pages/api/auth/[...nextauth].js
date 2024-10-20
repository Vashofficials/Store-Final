import NextAuth from "next-auth";
import { getDynamicAuthOptions } from "@lib/next-auth-options";

export default async function auth(req, res) {
  const options = await getDynamicAuthOptions();
  return NextAuth(req, res, options);
}
