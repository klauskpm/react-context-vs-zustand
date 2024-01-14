import DisplayCounter from '../components/Counter';
import { useCount } from './Store';
import {useStoreRenderCount} from "../hooks/useLogRenders";

function Counter() {
  const count = useCount();
  useStoreRenderCount('Zustand', 'Counter');

  return <DisplayCounter count={count} />;
}

export default Counter;
