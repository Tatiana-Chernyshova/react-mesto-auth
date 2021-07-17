function PopupWithForm(props) {

  return (
    <article className={`overlay page__overlay page__overlay_${props.isOpen && 'active'}`}>
      <form
        className={`popup popup_type_form popup_do_${props.name}`}
        name={`form-${props.name}`}
        onSubmit={props.onSubmit}
        >
        <h2 className="popup__heading">{props.title}</h2>
        <fieldset className="popup__input-container">
          {props.children}
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

export default PopupWithForm;
