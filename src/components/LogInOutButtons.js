import {useStoreRenderCount} from "../hooks/useLogRenders";

function LogInOutButtons({ onLoginClick, onLogoutClick }) {
  useStoreRenderCount('Components', 'LogInOutButtons');
  return (
    <div>
      <button onClick={onLoginClick}>Login</button>
      <button onClick={onLogoutClick}>Logout</button>
    </div>
  )
}

export default LogInOutButtons;
