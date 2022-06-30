import react from "react";

export const navigationRef = react.createRef();

const navigate = (name, params) =>
  navigationRef.current?.navigate(name, params);

export default {
  navigate,
};
