function Auth(props) {

  return (
    <article className="page__auth">
      <form className="auth" name="auth">
        <h2 className="auth__heading">{props.title}</h2>
        <fieldset className="auth__input-container">
          <input type="text" className="auth__input" id="email" name="email" placeholder="Email"
            value="" required />
          <input type="password" className="auth__input" id="password" name="password"
            placeholder="Пароль" value="" required />
          <button type="submit" className="auth__submit" aria-label="auth__submit">{props.buttonText}</button>
          <a href="#" className="auth__link" target="_blank" rel="noopener">{props.captionText}</a>
        </fieldset>
      </form>
    </article>
  );

}

export default Auth;
