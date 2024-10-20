import Link from "next/link";
// import dayjs from "dayjs";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { IoLockOpenOutline } from "react-icons/io5";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

//internal import
import { getUserSession } from "@lib/auth";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";

const NavBarTop = () => {
  const userInfo = getUserSession();
  const router = useRouter();

  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  const handleLogOut = () => {
    signOut();
    Cookies.remove("couponInfo");
    router.push("/");
  };

  useEffect(() => {
    if (userInfo) {
      const decoded = jwtDecode(userInfo?.token);

      const expireTime = new Date(decoded?.exp * 1000);
      const currentTime = new Date();

      // console.log(
      //   // decoded,
      //   "expire",
      //   dayjs(expireTime).format("DD, MMM, YYYY, h:mm A"),
      //   "currentTime",
      //   dayjs(currentTime).format("DD, MMM, YYYY, h:mm A")
      // );
      if (currentTime >= expireTime) {
        console.log("token expire, should sign out now..");
        handleLogOut();
      }
    }
  }, [userInfo]);

  return (
    <>
      <div className="hidden lg:block bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="text-gray-700 py-2 font-sans text-xs font-medium border-b flex justify-between items-center">
            <span className="flex items-center">
              <FiPhoneCall className="mr-2" />
              {showingTranslateValue(
                storeCustomizationSetting?.navbar?.help_text
              )}
              <a
                href={`tel:${
                  storeCustomizationSetting?.navbar?.phone_number ||
                  "+099949343"
                }`}
                className="font-bold text-emerald-500 ml-1"
              >
                {storeCustomizationSetting?.navbar?.phone_number ||
                  "+099949343"}
              </a>
            </span>

            <div className="lg:text-right flex items-center navBar">
              {storeCustomizationSetting?.navbar?.about_menu_status && (
                <div>
                  <Link
                    href="/about-us"
                    className="font-medium hover:text-emerald-600"
                  >
                    {showingTranslateValue(
                      storeCustomizationSetting?.navbar?.about_us
                    )}
                  </Link>
                  <span className="mx-2">|</span>
                </div>
              )}
              {storeCustomizationSetting?.navbar?.contact_menu_status && (
                <div>
                  <Link
                    href="/contact-us"
                    className="font-medium hover:text-emerald-600"
                  >
                    {showingTranslateValue(
                      storeCustomizationSetting?.navbar?.contact_us
                    )}
                  </Link>
                  <span className="mx-2">|</span>
                </div>
              )}
              <Link
                href="/user/my-account"
                className="font-medium hover:text-emerald-600"
              >
                {showingTranslateValue(
                  storeCustomizationSetting?.navbar?.my_account
                )}
              </Link>
              <span className="mx-2">|</span>
              {userInfo?.email ? (
                <button
                  onClick={handleLogOut}
                  className="flex items-center font-medium hover:text-emerald-600"
                >
                  <span className="mr-1">
                    <IoLockOpenOutline />
                  </span>
                  {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.logout
                  )}
                </button>
              ) : (
                <Link
                  href="/auth/login"
                  className="flex items-center font-medium hover:text-emerald-600"
                >
                  <span className="mr-1">
                    <FiUser />
                  </span>

                  {showingTranslateValue(
                    storeCustomizationSetting?.navbar?.login
                  )}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(NavBarTop), { ssr: false });
