import {useStoreRenderCount} from "../hooks/useLogRenders";
import {borderStyle} from "../styles/border";

function User({ user }) {
  useStoreRenderCount('Components', 'User')
  return <p style={borderStyle}>User: {user}</p>
}

export default User;
