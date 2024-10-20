import requests from "./httpServices";

const SettingServices = {
  //store setting all function
  getStoreSetting: async () => {
    return requests.get("/setting/store-setting/all");
  },

  getStoreSeoSetting: async () => {
    return requests.get("/setting/store-setting/seo");
  },
  //store customization setting all function
  getStoreCustomizationSetting: async () => {
    return requests.get("/setting/store/customization/all");
  },

  getShowingLanguage: async () => {
    return requests.get(`/language/show`);
  },

  getGlobalSetting: async () => {
    return requests.get("/setting/global/all");
  },
};

export default SettingServices;
