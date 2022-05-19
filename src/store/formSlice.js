import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    userName: "",
    email: "",
    password: "",
    conPassword: "",
    isTouched: {
      name: false,
      email: false,
      password: false,
      conPassword: false,
    },
  },
  reducers: {
    nameChangeHandler(state, action) {
      state.userName = action.payload;
    },
    emailChangeHandler(state, action) {
      state.email = action.payload;
    },
    passwordChangeHandler(state, action) {
      state.password = action.payload;
    },
    conPasswordChangeHandler(state, action) {
      state.conPassword = action.payload;
    },
    nameBlurHandler(state) {
      state.isTouched.name = true;
    },
    emailBlurHandler(state) {
      state.isTouched.email = true;
    },
    passwordBlurHandler(state) {
      state.isTouched.password = true;
    },
    conPasswordBlurHandler(state) {
      state.isTouched.conPassword = true;
    },
    submitHandler(state) {
      const data = {
        Uname: state.userName,
        email: state.email,
        password: state.password,
        conPassword: state.conPassword,
      };

      console.log(data);

      state.userName = "";
      state.isTouched.name = false;
      state.email = "";
      state.isTouched.email = false;
      state.password = "";
      state.isTouched.password = false;
      state.conPassword = "";
      state.isTouched.conPassword = false;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
