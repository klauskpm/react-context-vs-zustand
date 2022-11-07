import LogInOutButtons from '../components/LogInOutButtons';
import { useContextDispatch, login, logout } from './Store';

function UserButtons() {
  const dispatch = useContextDispatch();

  return (
    <LogInOutButtons
      onLoginClick={() => dispatch(login())}
      onLogoutClick={() => dispatch(logout())}
    />
  )
}

export default UserButtons;
