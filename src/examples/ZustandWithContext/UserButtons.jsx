import LogInOutButtons from '../../components/LogInOutButtons';
import { useLogin, useLogout } from './Store';
import {useStoreRenderCount} from "../../hooks/useStoreRenderCount";

function UserButtons() {
  const login = useLogin();
  const logout = useLogout();
  useStoreRenderCount('ZustandWithContext', 'UserButtons');

  return (
    <LogInOutButtons
      onLoginClick={() => login()}
      onLogoutClick={() => logout()}
    />
  )
}

export default UserButtons;
