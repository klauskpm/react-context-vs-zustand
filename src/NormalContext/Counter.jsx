import DisplayCounter from '../components/Counter';
import { useContextState } from './Store';
import {useStoreRenderCount} from "../hooks/useLogRenders";

function Counter() {
  useStoreRenderCount('NormalContext', 'Counter');
  const state = useContextState();

  return <DisplayCounter count={state.count} />;
}

export default Counter;
