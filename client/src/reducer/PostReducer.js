// const initialState = {
//   posts: [],
//   loading: false,
//   error: false,
//   uploading: false,
// };

const postReducer = (
  state = {
    posts: [],
    loading: false,
    error: false,
    uploading: false,
  },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return {
        ...state,
        error: false,
        uploading: true,
        // posts: null,
      };
    case "UPLOAD_SUCESS":
      return {
        ...state,
        error: false,
        uploading: false,
        posts: [action.data, ...state.posts],
      };
    case "UPLOAD_FAIL":
      return {
        ...state,
        uploading: false,
        error: true,
        // posts: null,
      };
    // belongs to Posts.jsx
    case "RETREIVING_START":
      return { ...state, loading: true, error: false };
    case "RETREIVING_SUCCESS":
      return { ...state, posts: action.data, loading: false, error: false };
    case "RETREIVING_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default postReducer;
