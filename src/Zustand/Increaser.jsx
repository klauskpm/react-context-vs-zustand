import { useIncreaseCount } from './Store';

function Increaser() {
  const increaseCount = useIncreaseCount();

  return (
    <button onClick={() => increaseCount()}>Increase count!</button>
  );
}

export default Increaser;
