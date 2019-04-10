export const contactUsActions = contact => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .add({
        ...contact
      })
      .then(() => {
        dispatch({ type: "CONTACT_US", contact });
      })
      .catch(err => {
        dispatch({ type: "CONTACT_US_ERROR", err });
      });
  };
};
