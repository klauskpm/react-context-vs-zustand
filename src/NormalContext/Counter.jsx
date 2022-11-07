import DisplayCounter from '../components/Counter';
import { useContextState } from './Store';

function Counter() {
  const state = useContextState();

  return <DisplayCounter count={state.count} />;
}

export default Counter;
