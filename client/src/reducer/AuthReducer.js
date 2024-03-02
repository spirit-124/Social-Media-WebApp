// const initialState = ;

const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, loading: false, error: false, authData: action.data };
    case "AUTH_FAILURE":
      return { ...state, loading: false, error: true };

    case "UPDATING_START":
      return { ...state, updateLoading: true, error: false };
    case "UPDATING_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        updateLoading: false,
        error: false,
      };

    case "UPDATING_FAIL":
      return { ...state, updateLoading: true, error: true };

    case "LOG_OUT":
      localStorage.clear();
      return { ...state, loading: false, error: false, authData: null };
    default:
      return state;
  }
};

export default authReducer;
