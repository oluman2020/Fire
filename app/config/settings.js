import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.43.20:19002/api",
  },
  staging: {
    apiUrl: "http://192.168.43.20:19002/api",
  },
  prod: {
    apiUrl: "http://192.168.43.20:19002/api",
  },
};

const getCurrentsetting = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === staging) return settings.staging;
  return settings.prod;
};

export default getCurrentsetting();
