import axios from "axios";

export const uploadSnapshot = (form) => {
  return axios({
    method: "POST",
    url: `${process.env.API}/v1/snapshot`,
    data: form,
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  }).then((res) => {
    return res.data;
  });
};

export const downloadSnapshot = (id) => {
  return axios({
    method: "GET",
    url: `${process.env.API}/v1/download-snapshot/${id}`,
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  }).then((res) => {
    return res.data;
  });
};
