import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//internal import
// import useAsync from "./useAsync";
import SettingServices from "@services/SettingServices";
import { addSetting } from "@redux/slice/settingSlice";
import { storeCustomization } from "@utils/storeCustomizationSetting";

const useGetSetting = () => {
  const lang = Cookies.get("_lang");
  const dispatch = useDispatch();

  // const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);
  // const {
  //   data: storeCustomizationSetting,
  //   loading,
  //   error,
  // } = useAsync(SettingServices.getStoreCustomizationSetting);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const settings = useSelector((state) => state.setting.settingItem);

  const globalSetting = settings.find(
    (value) => value.name === "globalSetting"
  );

  const storeCustomizationSetting = settings.find(
    (value) => value.name === "storeCustomizationSetting"
  );

  // useEffect(() => {
  //   setSocket(io(process.env.NEXT_PUBLIC_API_BASE_URL));
  //   // setSocket(io("http://localhost:5065"));
  // }, []);

  useEffect(() => {
    // Function to fetch and add the setting
    const fetchAndAddSetting = async () => {
      try {
        setLoading(true);
        // console.log("storeCustomizationSetting setting not available");
        const res = await SettingServices.getStoreCustomizationSetting();
        // console.log("res", res);
        const storeCustomizationSettingData = {
          ...res,
          name: "storeCustomizationSetting",
        };

        if (Object.keys(res).length > 0) {
          dispatch(addSetting(storeCustomizationSettingData));
        } else {
          // console.log(
          //   "store customization setting not available in db! use local one"
          // );
          const storeCustomizationData = {
            ...storeCustomization?.setting,
            name: "storeCustomizationSetting",
          };
          dispatch(addSetting(storeCustomizationData));
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        console.log("Error on getting storeCustomizationSetting setting", err);
      }
    };

    const fetchGlobalSetting = async () => {
      try {
        // setLoading(true);
        // console.log("globalSetting setting not available");
        const res = await SettingServices.getGlobalSetting();
        const globalSettingData = {
          ...res,
          name: "globalSetting",
        };

        dispatch(addSetting(globalSettingData));

        // setLoading(false);
      } catch (err) {
        setError(err.message);
        console.log("Error on getting globalSetting setting", err);
      }
    };

    // Check if the setting is not in the store and fetch it
    if (!storeCustomizationSetting) {
      fetchAndAddSetting();
    }

    if (!globalSetting) {
      fetchGlobalSetting();
    }

    // Check if the "lang" value is not set and set a default value
    if (!lang) {
      Cookies.set("_lang", "en", {
        sameSite: "None",
        secure: true,
      });
    }
  }, [lang]);

  return {
    lang,
    error,
    loading,
    globalSetting,
    storeCustomizationSetting,
  };
};

export default useGetSetting;
