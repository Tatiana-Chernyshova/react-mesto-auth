function ImagePopup(props) {

    return (
      <article 
      className={`overlay page__overlay page__overlay_type_look page__overlay_${props.isOpen && 'active'}`}>
      <div className="popup popup_type_image popup_do_look">
        <figure className="popup__figure">
          <img 
          src={props.card.link} 
          alt={props.card.name} 
          className="popup__image"
          />
          <figcaption className="popup__caption">{props.card.name}</figcaption>
        </figure>
        <button className="popup__button popup__button_close" type="button" aria-label="Закрыть"
        onClick={props.onClose}
        ></button>
      </div>
    </article>
    );
}

export default ImagePopup;
