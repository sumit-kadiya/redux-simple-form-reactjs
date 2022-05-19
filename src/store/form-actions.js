export const sendFormData = (data) => {
  return () => {
    const sendRequest = async () => {
      await fetch(
        "https://redux-form-f7734-default-rtdb.firebaseio.com/user.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: data.enteredName,
            email: data.enteredEmail,
            password: data.enteredPassword,
            confirmPassword: data.enteredConPassword,
          }),
        }
      );
    };

    sendRequest();
  };
};
