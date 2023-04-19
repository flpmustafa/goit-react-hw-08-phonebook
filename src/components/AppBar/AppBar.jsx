import { Navigation } from '../Nav/Nav';
import { Menu } from '../Menu/Menu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import css from 'components/AppBar/AppBar.module.css'

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <Menu /> : <AuthNav />}
    </header>
  );
};