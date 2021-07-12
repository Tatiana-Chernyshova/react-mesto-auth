import React from 'react';
import Auth from "./Auth";

function Register(props) {

  return (
    <Auth
    title="Регистрация"
    text="Email"
    buttonText="Зарегистрироваться"
    captionText="Уже зарегистрированы? Войти"
    // isOpen={props.isOpen}
    // onClose={props.onClose}
    // onSubmit={handleSubmit}
    >
    </Auth>
  );

}

export default Register;
