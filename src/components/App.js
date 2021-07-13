import React from "react";
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import InfoTooltip from "./InfoTooltip";
import * as auth from '../utils/auth.js';

import infoTooltipSuccess from '../images/success.svg'; 
import infoTooltipFail from '../images/fail.svg'; 

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const history = useHistory();
  const [loggedIn, setloggedIn] = React.useState(false);
  const [isInfoPopupOpen, setInfoPopupOpen] = React.useState(false);
  const [isInfoTooltip, setInfoTooltip] = React.useState({message: '', image: ''});

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
    setInfoPopupOpen(false);
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

  function setInfoTooltipFail() {
    setInfoTooltip({
        message: 'Что-то пошло не так! Попробуйте еще раз.',
        image: infoTooltipFail
    })
}

  function handleRegister({email, password}) {
    
    auth.register({
        email, password
    })
        .then((res) => {

            history.push('/singin');

            setInfoTooltip({
                message: 'Вы успешно зарегистрировались!',
                image: infoTooltipSuccess
            });
            setInfoPopupOpen(true);
        })
        .catch((err) => {
            setInfoTooltipFail();
            setInfoPopupOpen(true);
        })
}

function handleLogin({email, password}) {
    // console.log(email);
    // console.log(password);
  auth.login({
      email, password
  })
      .then((res) => {
        if (res) {
          // checkToken();
          // getCards();
          // getUser();

          // setHeaderUserLoginEmail(email);

          // setLoggedIn(true);

          setInfoTooltip({
              message: 'Вы успешно авторизовались!',
              image: infoTooltipSuccess
          });

          setInfoPopupOpen(true);
      }
  })
  .catch(() => {
      // setLoggedIn(false);
      // setInfoTooltipError()
      // setInfoPopupOpen(true);
      setInfoTooltipFail();
      setInfoPopupOpen(true);
      })
}


// function handleLogin({email, password}) {

//   auth.login({
//       email, password
//   })
//       .then((res) => {

//           if (res) {
//               // checkToken();
//               // getCards();
//               // getUser();

//               // setHeaderUserLoginEmail(email);

//               // setLoggedIn(true);

//               // setInfoTooltip({
//               //     message: 'Вы успешно авторизовались!',
//               //     image: infoTooltipDoneImage
//               // });

//               setInfoPopupOpen(true);
//           }
//       })
//       .catch(() => {
//           setloggedIn(false);
//           setInfoTooltipError()
//           setInfoPopupOpen(true);
//       })
// }

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
          <Switch>
            {/* <Route exact path="/">
              {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
            </Route>  */}


            <ProtectedRoute
              exact
              path="/"
              loggedIn={loggedIn}
              component={Main}
              onAddPlace={handleIsAddPlacePopupOpen}
              onEditAvatar={handleIsEditAvatarPopupOpen}
              onEditProfile={handleIsEditProfilePopupOpen}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />

            <Route path="/signup">
              <Header text="Войти" url="/signin"/>
              <Register 
                onSubmit={handleRegister}
              />
            </Route>

            <Route path="/signin">
              <Header text="Регистрация" url="/signup"/>
              <Login 
                onSubmit={handleLogin}
              />
            </Route>

            {/* <Route exact path="/">
              <ProtectedRoute />
            </Route> */}
          </Switch>


          {/* <Header /> */}

          {/* <Login /> */}
          {/* captionText="Уже зарегистрированы? Войти" */}

          {/* <InfoTooltip /> */}

          {/* <Main
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
          

          
          */}
          <InfoTooltip
            isOpen={isInfoPopupOpen}
            onClose={closeAllPopups}
            message={isInfoTooltip.message}
            image={isInfoTooltip.image}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
