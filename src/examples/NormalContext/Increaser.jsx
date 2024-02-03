import IncreaseCounterButton from '../../components/IncreaseCounterButton';
import { increaseCount, useContextDispatch } from './Store';
import {useStoreRenderCount} from "../../hooks/useStoreRenderCount";

function Increaser() {
  useStoreRenderCount('NormalContext', 'Increaser');
  const dispatch = useContextDispatch();

  return <IncreaseCounterButton onClick={() => dispatch(increaseCount())} />;
}

export default Increaser;
