import DisplayCounter from '../../components/Counter';
import { useCount } from './Store';
import {useStoreRenderCount} from "../../hooks/useStoreRenderCount";

function Counter() {
  const count = useCount();
  useStoreRenderCount('SimplerContext', 'Counter');

  return <DisplayCounter count={count} />;
}

export default Counter;
