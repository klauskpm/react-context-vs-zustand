import IncreaseCounterButton from '../../components/IncreaseCounterButton';
import { useIncreaseCount } from './Store';
import {useStoreRenderCount} from "../../hooks/useStoreRenderCount";

function Increaser() {
  const increaseCount = useIncreaseCount();
  useStoreRenderCount('Zustand', 'Increaser');

  return <IncreaseCounterButton onClick={() => increaseCount()} />;
}

export default Increaser;
