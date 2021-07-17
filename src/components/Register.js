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
      onSubmit={props.onSubmit}
    ></AuthForm>
  );
}

export default Register;
