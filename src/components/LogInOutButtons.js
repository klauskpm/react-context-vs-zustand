const style = {
  display: 'flex'
};

function LogInOutButtons({ onLoginClick, onLogoutClick }) {
  return (
    <div style={style}>
      <button onClick={onLoginClick}>Login</button>
      <button onClick={onLogoutClick}>Logout</button>
    </div>
  )
}

export default LogInOutButtons;
