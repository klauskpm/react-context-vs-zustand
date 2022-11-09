import LogInOutButtons from '../components/LogInOutButtons';
import { useLogin, useLogout } from './Store';

function UserButtons() {
  const login = useLogin();
  const logout = useLogout();

  return (
    <LogInOutButtons
      onLoginClick={() => login()}
      onLogoutClick={() => logout()}
    />
  )
}

export default UserButtons;
