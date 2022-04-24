import axios from "axios";

export const getRequest = async ({ url, body }) => {
  try {
    const response = await axios.get(url, {
      //   withCredentials: true,
    });
    // console.log("data: ", response.data);
    return response.data;
  } catch (err) {
    // console.log("error: ", err.response.data);
    return err.response.data;
  }
};
