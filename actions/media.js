import axios from "axios";

export const getFile = ({key, bucket}) => {
  return axios({
    method: "GET",
    url: `${process.env.API}/v1/media?key=${key}&bucket=${bucket}`,
  }).then((res) => {
    return res;
  });
};
