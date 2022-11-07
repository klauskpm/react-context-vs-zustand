import Counter from './Counter';
import Increaser from './Increaser';
import { useCount, useIncreaseCount } from './Store';

function Main() {
  const count = useCount();
  const increaseCount = useIncreaseCount();

  return (
    <>
      <p>Simpler Context</p>
      <Increaser />
      <Counter />
    </>
  );
}

export default Main;
