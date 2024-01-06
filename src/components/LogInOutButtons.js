import {useStoreRenderCount} from "../hooks/useLogRenders";
import {borderStyle} from "../styles/border";

function LogInOutButtons({ onLoginClick, onLogoutClick }) {
  useStoreRenderCount('Components', 'LogInOutButtons');
  return (
    <div style={borderStyle}>
      <button onClick={onLoginClick}>Login</button>
      <button onClick={onLogoutClick}>Logout</button>
    </div>
  )
}

export default LogInOutButtons;
