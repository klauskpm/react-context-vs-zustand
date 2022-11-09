import DisplayUser from '../components/User';
import { useUser } from './Store';

function User() {
  const user = useUser();

  return <DisplayUser user={user} />;
}

export default User;
