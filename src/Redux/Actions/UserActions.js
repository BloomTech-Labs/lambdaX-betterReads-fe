const setUser = user => {
  return {
    type: "SET_USER",
    payload: user
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT"
  };
};

export default {
  setUser,
  logOut
};
