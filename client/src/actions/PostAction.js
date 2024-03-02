import * as PostApi from "../api/PostRequest";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    console.log("start ho gya hai");
    const { data } = await PostApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data });
  } catch (err) {
    dispatch({ type: "RETREIVING_FAIL" });
    console.log(err);
  }
};
