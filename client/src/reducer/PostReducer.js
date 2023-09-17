const initialState = {
  posts: null,
  loading: false,
  error: false,
  uploading: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPLOAD_START":
      return {
        ...state,
        error: false,
        uploading: true,
        posts: null,
      };
    case "UPLOAD_SUCESS":
      return {
        ...state,
        loading: false,
        error: false,
        uploading: false,
        posts: [action.post, ...state.posts],
      };
    case "UPLOAD_FAIL":
      return {
        ...state,
        uploading: false,
        posts: null,
      };
    default:
      return state;
  }
};

export default postReducer;
