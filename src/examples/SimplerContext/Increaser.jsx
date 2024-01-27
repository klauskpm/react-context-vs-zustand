import IncreaseCounterButton from '../../components/IncreaseCounterButton';
import { useIncreaseCount } from './Store';
import {useStoreRenderCount} from "../../hooks/useLogRenders";

function Increaser() {
  const increaseCount = useIncreaseCount();
  useStoreRenderCount('SimplerContext', 'Increaser');

  return <IncreaseCounterButton onClick={() => increaseCount()} />;
}

export default Increaser;
