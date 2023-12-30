import {useStoreRenderCount} from "../hooks/useLogRenders";

function User({ user }) {
  useStoreRenderCount('Components', 'User')
  return <p>User: {user}</p>
}

export default User;
