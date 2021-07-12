import React from 'react';
import Auth from "./Auth";

// function EditProfilePopup(props) {
  // const [name, setName] = React.useState('');
  // const [description, setDescription] = React.useState('');
  // const currentUser = React.useContext(CurrentUserContext);

  // function handleChangeName(e) {
  //   setName(e.target.value);
  // }

  // function handleChangeDescription(e) {
  //   setDescription(e.target.value);
  // }

  // function handleSubmit(e) {
  //   // Запрещаем браузеру переходить по адресу формы
  //   e.preventDefault();
  //   // Передаём значения управляемых компонентов во внешний обработчик
  //   props.onUpdateUser({
  //     name,
  //     about: description,
  //   });
  //   setName('');
  //   setDescription('');
  // }

  // React.useEffect(() => {
  //   setName(currentUser.name);
  //   setDescription(currentUser.about);
  // }, [currentUser, props.isOpen]); 

//   return (
//     <Auth
//     title="Редактировать профиль"
//     text="Emaidddd"
//     buttonText="Сохранить"
//     captionText="Уже зарегистрированы? Войти"
//     isOpen={props.isOpen}
//     onClose={props.onClose}
//     onSubmit={handleSubmit}
//   >
//   </Auth>
//   );
// }

// export default EditProfilePopup;



function Login(props) {

  return (
    <Auth
    title="Вход"
    buttonText="Войти"
    // captionText="Уже зарегистрированы? Войти"
    // isOpen={props.isOpen}
    // onClose={props.onClose}
    // onSubmit={handleSubmit}
    >
    </Auth>
  );

}

export default Login;
