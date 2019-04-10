const initState = {};

const contactUsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CONTACT_US":
      return state;
    case "CONTACT_US_ERR":
      return state;
    default:
      return state;
  }
};

export default contactUsReducer;
