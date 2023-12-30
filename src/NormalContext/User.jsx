import DisplayUser from '../components/User';
import { useContextState } from './Store';
import {useStoreRenderCount} from "../hooks/useLogRenders";

function User() {
  useStoreRenderCount('NormalContext', 'User');
  const state = useContextState();

  return <DisplayUser user={state.user} />;
}

export default User;
