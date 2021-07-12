import success from '../images/success.svg'; 
import fail from '../images/fail.svg'; 

function SuccessPopup(props) {

    return (
      <article 
      className={`overlay page__overlay page__overlay_type_look 

      `
      // page__overlay_active
      }>
              {/* page__overlay_${props.isOpen && 'active'} */}
      <div className="popup popup_type_auth">
        <figure className="popup__info">
          <img 
          // src={props.card.link} 
          // alt={props.card.name} 
          src={fail} 
          className="popup__info_image"
          />
          <figcaption className="popup__info_message">
          {/* {props.card.name} */}
          Вы успешно зарегистрировались!
          </figcaption>
        </figure>
        <button className="popup__button popup__button_close" type="button" aria-label="Закрыть"
        // onClick={props.onClose}
        ></button>
      </div>
    </article>
    );
}

export default SuccessPopup;
