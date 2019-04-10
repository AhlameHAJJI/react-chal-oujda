const initState = {};

const contactUsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CONTACT_US":
      console.log("");
      return state;
    case "CONTACT_US_ERR":
      console.log("contact us err");
      return state;
    default:
      return state;
  }
  return state;
};

export default contactUsReducer;
