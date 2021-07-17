import React from 'react';
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `elements__button-delete ${!isOwn && 'elements__button-delete_hidden'}`
  );
  
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `elements__button-like ${isLiked && 'elements__button-like_active'}`
  );

  const handleLikeClick = () => {
    props.onCardLike(props.card);
  };
  const handleDeleteClick = () => {
    props.onCardDelete(props.card);
  };
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="elements__item">
      <img
        className="elements__image"
        src={props.card.link} 
        alt={props.card.name} 
        onClick={handleClick}
      />
      <div className="elements__box">
        <h2 className="elements__caption">{props.card.name}</h2>
        <div className="elements__like-box">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Мне нравится"
            onClick={handleLikeClick}
          ></button>
          <p className="elements__number">{props.card.likes.length}</p>
        </div>
      </div>
      <button
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="Удалить"
        onClick={handleDeleteClick}
      ></button>
    </div>
  );
}

export default Card;
