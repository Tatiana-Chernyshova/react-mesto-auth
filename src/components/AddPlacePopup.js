import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      link,
    });
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input popup__input_el_caption"
        id="caption-input"
        name="name"
        placeholder="Название"
        value={name || ''}
        minLength="2"
        maxLength="30"
        required
        onChange={handleChangeName}
      />
      <span className="caption-input-error popup__input-error">
        Вы пропустили это поле.
      </span>
      <input
        type="url"
        className="popup__input popup__input_el_image"
        id="image-input"
        name="link"
        placeholder="Ссылка на картинку"
        value={link || ''}
        required
        onChange={handleChangeLink}
      />
      <span className="image-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
