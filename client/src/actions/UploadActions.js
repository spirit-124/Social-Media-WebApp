import * as UploadApi from "../api/UploadRequest";
export const UploadImage = (formData) => async (dispatch) => {
  try {
    await UploadApi.uploadImage(formData);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = (formData) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await UploadApi.uploadPost(formData);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
