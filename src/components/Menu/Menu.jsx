import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/Auth/Operation';
import { useAuth } from '../../hooks/useAuth';
import css from 'components/Menu/Menu.module.css';

export const Menu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.Menu}>
      <h3>Welcome, {user.name}</h3>
      <button className={css.btn_out} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};