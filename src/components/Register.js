import React, { Button } from "react";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

function Register(props) {
  return (
    <AuthForm
      title="Регистрация"
      text="Email"
      buttonText="Зарегистрироваться"
      linkUrl="/signin"
      linkText="Уже зарегистрированы? Войти"

      // isOpen={props.isOpen}
      // onClose={props.onClose}
      onSubmit={props.onSubmit}
      // isOpen={props.isOpen}
    ></AuthForm>
  );
}

export default Register;
