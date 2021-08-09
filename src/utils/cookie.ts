import { AUTH_EXPIRATION_TIME } from "../constants/constants";

export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const setCookie = (name: string, value: string | null, props: any) => {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  if (value) value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
};

export const setCookies = (rawData: any) => {
  const { refreshToken } = rawData;
  const authToken = rawData.accessToken?.split("Bearer ")[1];
  if (authToken) {
    setCookie("accessToken", authToken, {
      expires: AUTH_EXPIRATION_TIME,
      path: "/",
    });
  }
  if (refreshToken !== getCookie("refreshToken")) {
    setCookie("refreshToken", refreshToken, null);
  }
};

export const deleteCookie = (name: string) => {
  setCookie(name, null, { expires: -1 });
};
