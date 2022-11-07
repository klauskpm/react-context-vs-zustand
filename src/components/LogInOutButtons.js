function LogInOutButtons({ onLoginClick, onLogoutClick }) {
  return (
    <div>
      <button onClick={onLoginClick}>Login</button>
      <button onClick={onLogoutClick}>Logout</button>
    </div>
  )
}

export default LogInOutButtons;
