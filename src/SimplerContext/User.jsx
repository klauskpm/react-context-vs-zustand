import DisplayUser from '../components/User';
import { useUser } from './Store';
import {useStoreRenderCount} from "../hooks/useLogRenders";

function User() {
  const user = useUser();
  useStoreRenderCount('SimplerContext', 'User');

  return <DisplayUser user={user} />;
}

export default User;
