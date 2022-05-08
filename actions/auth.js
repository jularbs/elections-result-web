import cookie from "js-cookie";
import axios from "axios";
export const signIn = (user) => {
  return axios({
    method: "POST",
    url: `${process.env.API}/v1/signin`,
    data: user,
  }).then((res) => {
    return res.data;
  });
};

export const authenticate = (data, next) => {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};

export const signUp = (user) => {
  return axios({
    method: "POST",
    url: `${process.env.SPC_API}/v1/signup`,
    data: user,
  }).then((res) => {
    return res.data;
  });
};

export const signout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
  return axios({
    method: "GET",
    url: `${process.env.SPC_API}/v1/signout`,
  }).then((res) => {
    return res.data;
  });
};

export const changePassword = (user, token) => {
  return axios({
    method: "POST",
    url: `${process.env.SPC_API}/v1/change-password`,
    data: user,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.data;
  });
};

//COMMON FUNCTIONS
export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key) => {
  if (process.browser) {
    return cookie.get(key);
  }
};

export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};

export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        //console.table(JSON.parse(localStorage.getItem('user')));
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};
