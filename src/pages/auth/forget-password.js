import Link from "next/link";
import React from "react";
import { FiMail } from "react-icons/fi";

//internal import
import Error from "@components/form/Error";
import InputArea from "@components/form/InputArea";
import useLoginSubmit from "@hooks/useLoginSubmit";
import BottomNavigation from "@components/login/BottomNavigation";

const ForgetPassword = () => {
  const { handleSubmit, submitHandler, register, errors, loading } =
    useLoginSubmit();

  return (
    <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
      <div className="py-4 flex flex-col lg:flex-row w-full">
        <div className="w-full sm:p-5 lg:p-8">
          <div className="mx-auto text-left justify-center rounded-md w-full max-w-lg px-4 py-8 sm:p-10 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2x">
            <div className="overflow-hidden mx-auto">
              <div className="text-center mb-6">
                <Link href="/" className="text-3xl font-bold font-serif">
                  Forget Password
                </Link>
                <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
                  Reset Your Password
                </p>
              </div>
              <form
                onSubmit={handleSubmit(submitHandler)}
                className="flex flex-col justify-center"
              >
                <div className="grid grid-cols-1 gap-5">
                  <div className="form-group">
                    <InputArea
                      register={register}
                      label="Email"
                      name="verifyEmail"
                      type="email"
                      placeholder="Your Register Email"
                      Icon={FiMail}
                    />
                    <Error errorName={errors.verifyEmail} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex ms-auto">
                      <button
                        type="button"
                        className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
                      >
                        Forgot password?
                      </button>
                    </div>
                  </div>
                  {loading ? (
                    <button
                      disabled={loading}
                      type="submit"
                      className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
                    >
                      <img
                        src="/loader/spinner.gif"
                        alt="Loading"
                        width={20}
                        height={10}
                      />
                      <span className="font-serif ml-2 font-light">
                        Processing
                      </span>
                    </button>
                  ) : (
                    <button
                      disabled={loading}
                      type="submit"
                      className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1"
                    >
                      Recover password
                    </button>
                  )}
                </div>
              </form>
              <BottomNavigation
                or={true}
                route={"/auth/signup"}
                pageName={"Sign Up"}
                loginTitle="Sign Up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
