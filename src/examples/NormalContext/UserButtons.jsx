import LogInOutButtons from '../../components/LogInOutButtons';
import { useContextDispatch, login, logout } from './Store';
import {useStoreRenderCount} from "../../hooks/useStoreRenderCount";

function UserButtons() {
  useStoreRenderCount('NormalContext', 'UserButtons');
  const dispatch = useContextDispatch();

  return (
    <LogInOutButtons
      onLoginClick={() => dispatch(login())}
      onLogoutClick={() => dispatch(logout())}
    />
  )
}

export default UserButtons;
