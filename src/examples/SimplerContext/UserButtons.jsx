import LogInOutButtons from '../../components/LogInOutButtons';
import { useLogin, useLogout } from './Store';
import {useStoreRenderCount} from "../../hooks/useLogRenders";

function UserButtons() {
  const login = useLogin();
  const logout = useLogout();
  useStoreRenderCount('SimplerContext', 'UserButtons');

  return (
    <LogInOutButtons
      onLoginClick={() => login()}
      onLogoutClick={() => logout()}
    />
  )
}

export default UserButtons;
