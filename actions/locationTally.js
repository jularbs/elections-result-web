import axios from "axios";

export const getTallyByBatchAndLocation = ({ batchId, positionId }) => {
  return axios({
    method: "GET",
    url: `${process.env.API}/v1/tally/batch-position?batchId=${batchId}&positionId=${positionId}`,
  }).then((res) => {
    return res.data;
  });
};
