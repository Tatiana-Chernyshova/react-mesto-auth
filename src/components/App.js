import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  function handleIsEditProfilePopupOpen() {
    setIsEditProfilePopupOpen(true);
  }

  function handleIsAddPlacePopupOpen() {
    setIsAddPlacePopupOpen(true);
  }

  function handleIsEditAvatarPopupOpen() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(el) {
    setImagePopupOpen(true);
    setSelectedCard(el);
  }
  
  function handleUpdateUser(el) {
    api.setUserData(el)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(e => { console.log(e) })  
  }

  function handleUpdateAvatar(el) {
    api.editUserAvatar(el)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(e => { console.log(e) })  
  }

  function handleAddPlaceSubmit(el) {
    api.addCard(el)
      .then(res => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch(e => { console.log(e) })  
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {setCards(state => state.map(c => c._id === card._id ? newCard : c));
    })
      .catch(e => { console.log(e) });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter(c => c._id !== card._id);
        setCards(newCards);
    })
      .catch(e => { console.log(e) });
  }

  React.useEffect(() => {
    api.getUserData()
      .then(res => {
        setCurrentUser(res)
      })
      .catch(e => { console.log(e) })
  }, [])

  React.useEffect(() => {
    api.getCards()
      .then(card => {
        setCards(card)
      })
      .catch(e => { console.log(e) })
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />

          <Main
            onAddPlace={handleIsAddPlacePopupOpen}
            onEditAvatar={handleIsEditAvatarPopupOpen}
            onEditProfile={handleIsEditProfilePopupOpen}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

          <Footer />

          <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateAvatar}
          />

          <AddPlacePopup 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups}
          onUpdateUser={handleAddPlaceSubmit}
          />

          <ImagePopup
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
            card={selectedCard}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
