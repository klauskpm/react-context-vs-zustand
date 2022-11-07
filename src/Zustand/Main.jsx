import { useCount, useIncreaseCount } from './Store';


function Main() {
  const count = useCount();
  const increaseCount = useIncreaseCount();

  return (
    <>
      <p>Zustand</p>
      <button onClick={() => increaseCount()}>count is {count}</button>
    </>
  );
}

export default Main;
