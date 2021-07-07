function Login(props) {

  return (
    <article className="login page__login">
      <form
        className="login_type_form"
        // name={`form-${props.name}`}
        // onSubmit={props.onSubmit}
        >
        <h2 className="login__heading">Регистрация</h2>
        <fieldset className="popup__input-container">

        {/* <input
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
    <span className="about-input-error popup__input-error"></span> */}
    
          <button type="submit" className="popup__submit" aria-label="Сохранить" 
          >{props.buttonText}</button>
        </fieldset>
        <button className="popup__button popup__button_close" type="button" aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
      </form>
    </article>
  );

}

export default Login;
