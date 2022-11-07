import DisplayUser from '../components/User';
import { useContextState } from './Store';

function User() {
  const state = useContextState();

  return <DisplayUser user={state.user} />;
}

export default User;
