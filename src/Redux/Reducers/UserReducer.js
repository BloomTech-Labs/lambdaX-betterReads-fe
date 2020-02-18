// Import Actions?

export const setUser = "SET_USER";
export const logOut = "LOG_OUT";

const initialState = {
  user: null,
  isLoggedIn: false
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      };

    case "LOG_OUT":
      return {
        ...state,
        user: {},
        isLoggedIn: false
      };

    default:
      return initialState;
  }
};

export default UserReducer;
