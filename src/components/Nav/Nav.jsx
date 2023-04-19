import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from 'components/Nav/nav.module.css'
  

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav_link}>
      <NavLink
        to="/">
        <svg className={css.nav} id="Home" viewBox="0 0 32 32">
          <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
        </svg>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.nav_dec} 
          to="/contacts" 
           style={({ isActive }) => ({
             fontWeight: isActive ? '700' : '500',
             color: isActive ? 'black' : 'black',
           width: isActive ? '80px' : '80px',
           backgroundColor: isActive ?  'rgb(18, 201, 115)' : 'rgb(240 240 240)',
           padding: isActive ? '8px' : '8px',
           textAlign: isActive ? 'center' : 'center',
           borderRadius: isActive ? '7px' : '7px',
          })}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};