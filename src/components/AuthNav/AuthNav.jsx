import { NavLink } from 'react-router-dom';
import css from 'components/AuthNav/AuthNav.module.css'

export const AuthNav = () => {
  return (
    <div className={css.AuthNav}>
      <NavLink className={css.text_style} to="/register">Register</NavLink>
      <NavLink className={css.text_style} to="/login">Log In</NavLink>
    </div>
  );
};