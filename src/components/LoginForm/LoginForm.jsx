import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'Redux/Selector';
import { logIn } from 'Redux/Auth/Operation';
import css from 'components/ContactForm/ContactForm.module.css'

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
     <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <>
        <label className={css.label__form}>
            <input
              className={css.input__contact} 
              type="email"
              name="email"
              required
              placeholder="Email" />
        </label>
      </>
      <>
          <label
            className={css.label__form}>
            <input
              className={css.input__contact} 
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </label>
      </>
      <button className={css.btn} type="submit" disabled={isLoading}>
        Log In
      </button>
    </form>
     </div>
    
  );
};