import IncreaseCounterButton from '../components/IncreaseCounterButton';
import { useIncreaseCount } from './Store';

function Increaser() {
  const increaseCount = useIncreaseCount();

  return <IncreaseCounterButton onClick={() => increaseCount()} />;
}

export default Increaser;
