import axios from "axios";

export const getPositions = () => {
  return axios({
    method: "GET",
    url: `${process.env.API}/v1/position`,
  }).then((res) => {
    return res.data;
  });
};
