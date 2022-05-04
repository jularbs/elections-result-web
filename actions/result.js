import axios from "axios";

export const getResultsByBatch = (batchId) => {
  return axios({
    method: "GET",
    url: `${process.env.API}/v1/result/${batchId}`,
  }).then((res) => {
    return res.data;
  });
};

export const editBanner = (data, token) => {
  return axios({
    method: "PUT",
    url: `${process.env.SPC_API}/v1/banner`,
    data: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.data;
  });
};

export const getBanners = () => {
  return axios({
    method: "GET",
    url: `${process.env.SPC_API}/v1/banner`,
  }).then((res) => {
    return res.data;
  });
};

export const deleteBanner = (data, token) => {
  return axios({
    method: "DELETE",
    url: `${process.env.SPC_API}/v1/banner`,
    data: { slug: data },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.data;
  });
};

export const toggleStatus = (_id, token) => {
  return axios({
    method: "PUT",
    url: `${process.env.SPC_API}/v1/banner/toggle-status`,
    data: { _id },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
