import IncreaseCounterButton from '../components/IncreaseCounterButton';
import { increaseCount, useContextDispatch } from './Store';

function Increaser() {
  const dispatch = useContextDispatch();

  return <IncreaseCounterButton onClick={() => dispatch(increaseCount())} />;
}

export default Increaser;
