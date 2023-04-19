import { useDispatch } from 'react-redux';
import { register } from 'Redux/Auth/Operation';
import css from 'components/ContactForm/ContactForm.module.css'

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label__form}>
          <input
            className={css.input__contact} 
            type="text"
            name="name"
            placeholder="Username"
            required />
      </label>

      <label className={css.label__form}>
          <input
            className={css.input__contact}
            type="email"
            name="email"
            placeholder="Email"
            required />
      </label>

      <label className={css.label__form}>
          <input
          className={css.input__contact}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </label>

      <button className={css.btn} type="submit">Register</button>
    </form>
    </div>
    
  );
};