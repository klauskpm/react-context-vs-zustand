import Counter from './Counter';
import Increaser from './Increaser';
import User from './User';
import UserButtons from './UserButtons';

function Main() {
  return (
    <>
      <p>Zustand Middlewares</p>
      <Increaser />
      <Counter />
      <UserButtons />
      <User/>
    </>
  );
}

export default Main;
