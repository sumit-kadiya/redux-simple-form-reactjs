import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/formSlice";
import { sendFormData } from "../store/form-actions";

const Form = () => {
  const enteredName = useSelector((state) => state.userName);
  const enteredEmail = useSelector((state) => state.email);
  const enteredPassword = useSelector((state) => state.password);
  const enteredConPassword = useSelector((state) => state.conPassword);
  const dispatch = useDispatch();
  const enteredNameTouched = useSelector((state) => state.isTouched.name);
  const enteredMailTouched = useSelector((state) => state.isTouched.email);
  const enteredPasswordTouched = useSelector(
    (state) => state.isTouched.password
  );
  const enteredConPasswordTouched = useSelector(
    (state) => state.isTouched.conPassword
  );

  const enteredNameIsValid = enteredName.trim() !== "";
  const inputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredMailIsValid = enteredEmail.includes("@");
  const EmailIsInvalid = !enteredMailIsValid && enteredMailTouched;

  const enteredPasswordIsValid = enteredPassword.trim().length > 7;
  const PasswordIsInValid = !enteredPasswordIsValid && enteredPasswordTouched;

  const enteredConPasswordIsValid = enteredConPassword === enteredPassword;
  const conPasswordIsInValid =
    !enteredConPasswordIsValid && enteredConPasswordTouched;

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredMailIsValid &&
    enteredPasswordIsValid &&
    enteredConPasswordIsValid
  ) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    dispatch(formActions.nameChangeHandler(event.target.value));
  };
  const EmailInputChangeHandler = (event) => {
    dispatch(formActions.emailChangeHandler(event.target.value));
  };
  const passwordChangeHandler = (event) => {
    dispatch(formActions.passwordChangeHandler(event.target.value));
  };
  const conPasswordChangeHandler = (event) => {
    dispatch(formActions.conPasswordChangeHandler(event.target.value));
  };
  const inputBlurHandler = (event) => {
    dispatch(formActions.nameBlurHandler());
  };
  const EmailBlurHandler = (event) => {
    dispatch(formActions.emailBlurHandler());
  };
  const PasswordBlurHandler = (event) => {
    dispatch(formActions.passwordBlurHandler());
  };
  const ConPasswordBlurHandler = (event) => {
    dispatch(formActions.conPasswordBlurHandler());
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(formActions.submitHandler());
    dispatch(
      sendFormData({
        enteredName,
        enteredEmail,
        enteredPassword,
        enteredConPassword,
      })
    );
  };

  const inputClasses = inputIsInvalid ? "form-control invalid" : "form-control";
  const EmailInputClasses = EmailIsInvalid
    ? "form-control invalid"
    : "form-control";
  const PasswordClasses = PasswordIsInValid
    ? "form-control invalid"
    : "form-control";
  const ConPassClasses = conPasswordIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={inputBlurHandler}
        />
        {inputIsInvalid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={EmailInputChangeHandler}
          value={enteredEmail}
          onBlur={EmailBlurHandler}
        />
        {EmailIsInvalid && <p className="error-text">Enter Valid E-mail!</p>}
      </div>
      <div className={PasswordClasses}>
        <label htmlFor="pwd">Password</label>
        <input
          type="password"
          id="pwd"
          onChange={passwordChangeHandler}
          value={enteredPassword}
          onBlur={PasswordBlurHandler}
        />
        {PasswordIsInValid && (
          <p className="error-text">Enter valid Password!</p>
        )}
      </div>
      <div className={ConPassClasses}>
        <label htmlFor="conpwd">Confirm Password</label>
        <input
          type="password"
          id="conpwd"
          onChange={conPasswordChangeHandler}
          value={enteredConPassword}
          onBlur={ConPasswordBlurHandler}
        />
        {conPasswordIsInValid && (
          <p className="error-text">Password doesn't match!</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default Form;
