import Cookies from "js-cookie";
import { useSession } from "next-auth/react";
import React, { createContext, useEffect, useReducer } from "react";

//internal imports
import { setToken } from "@services/httpServices";
import LoadingForSession from "@components/preloader/LoadingForSession";

export const UserContext = createContext();

const initialState = {
  userInfo: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null,
  shippingAddress: Cookies.get("shippingAddress")
    ? JSON.parse(Cookies.get("shippingAddress"))
    : {},
  couponInfo: Cookies.get("couponInfo")
    ? JSON.parse(Cookies.get("couponInfo"))
    : {},
};

function reducer(state, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload };

    case "USER_LOGOUT":
      return {
        ...state,
        userInfo: null,
      };

    case "SAVE_SHIPPING_ADDRESS":
      return { ...state, shippingAddress: action.payload };

    case "SAVE_COUPON":
      return { ...state, couponInfo: action.payload };
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data: session, status } = useSession();
  // const status = "loading";

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      setToken(session.user.token);
    } else if (status === "unauthenticated") {
      setToken(null);
    }
  }, [session, status]);

  if (status === "loading") {
    return <LoadingForSession />;
  }

  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
