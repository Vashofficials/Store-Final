import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

//internal import
import { getUserSession } from "@lib/auth";
import Error from "@components/form/Error";
import Dashboard from "@pages/user/dashboard";
import InputArea from "@components/form/InputArea";
import useGetSetting from "@hooks/useGetSetting";
import CustomerServices from "@services/CustomerServices";
import { notifyError, notifySuccess } from "@utils/toast";
import useUtilsFunction from "@hooks/useUtilsFunction";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const userInfo = getUserSession();

  const onSubmit = async ({ email, currentPassword, newPassword }) => {
    // return notifySuccess("This Feature is disabled for demo!");

    setLoading(true);
    try {
      const res = await CustomerServices.changePassword({
        email,
        currentPassword,
        newPassword,
      });
      notifySuccess(res.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      notifyError(error ? error.response.data.message : error.message);
    }
  };

  useEffect(() => {
    setValue("email", userInfo?.email);
  }, []);

  return (
    <Dashboard
      title={showingTranslateValue(
        storeCustomizationSetting?.dashboard?.change_password
      )}
      description="This is change-password page"
    >
      <h2 className="text-xl font-serif font-semibold mb-5">
        {showingTranslateValue(
          storeCustomizationSetting?.dashboard?.change_password
        )}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-2">
            <div className="lg:mt-6 bg-white">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6">
                  <InputArea
                    register={register}
                    label={showingTranslateValue(
                      storeCustomizationSetting?.dashboard?.user_email
                    )}
                    name="email"
                    type="email"
                    autocomplete="username"
                    placeholder={showingTranslateValue(
                      storeCustomizationSetting?.dashboard?.user_email
                    )}
                    readOnly={true}
                  />
                  <Error errorName={errors.email} />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <InputArea
                    register={register}
                    label={showingTranslateValue(
                      storeCustomizationSetting?.dashboard?.current_password
                    )}
                    name="currentPassword"
                    type="password"
                    autocomplete="new-password"
                    placeholder={showingTranslateValue(
                      storeCustomizationSetting?.dashboard?.current_password
                    )}
                  />
                  <Error errorName={errors.currentPassword} />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <InputArea
                    register={register}
                    label={showingTranslateValue(
                      storeCustomizationSetting?.dashboard?.new_password
                    )}
                    name="newPassword"
                    type="password"
                    autocomplete="new-password"
                    placeholder={showingTranslateValue(
                      storeCustomizationSetting?.dashboard?.new_password
                    )}
                  />
                  <Error errorName={errors.newPassword} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-right">
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
              <span className="font-serif ml-2 font-light">Processing</span>
            </button>
          ) : (
            <button
              type="submit"
              className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
            >
              {showingTranslateValue(
                storeCustomizationSetting?.dashboard?.change_password
              )}
            </button>
          )}
        </div>
      </form>
    </Dashboard>
  );
};

export default ChangePassword;
