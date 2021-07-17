function InfoTooltip(props) {
  

    return (
      <article 
      className={`overlay page__overlay page__overlay_type_look page__overlay_${props.isOpen && 'active'}`}>
      <div className="popup popup_type_auth">
        <figure className="popup__info">
          <img 
          src={props.image} 
          alt={props.message}
          className="popup__info_image"
          />
          <figcaption className="popup__info_message">
          {props.message}
          </figcaption>
        </figure>
        <button className="popup__button popup__button_close" type="button" aria-label="Закрыть"
        onClick={props.onClose}
        ></button>
      </div>
    </article>
    );
}

export default InfoTooltip;
