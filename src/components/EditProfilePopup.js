import React from 'react';
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";


function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
    setName('');
    setDescription('');
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]); 

  return (
    <PopupWithForm
    title="Редактировать профиль"
    name="edit"
    buttonText="Сохранить"
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
  >
    <input
      type="text"
      className="popup__input popup__input_el_name"
      id="name-input"
      name="name"
      placeholder="Ваше имя"
      value={name || ''}
      minLength="2"
      maxLength="40"
      required
      onChange={handleChangeName}
    />
    <span className="name-input-error popup__input-error"></span>
    <input
      type="text"
      className="popup__input popup__input_el_about"
      id="about-input"
      name="about"
      placeholder="Краткое описание"
      value={description || ''}
      minLength="2"
      maxLength="200"
      required
      onChange={handleChangeDescription}
    />
    <span className="about-input-error popup__input-error"></span>
  </PopupWithForm>
  );
}

export default EditProfilePopup;
