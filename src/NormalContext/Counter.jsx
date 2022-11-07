import CounterDisplayer from '../components/CounterDisplayer';
import { useContextState } from './Store';

function Counter() {
  const state = useContextState();

  return <CounterDisplayer count={state.count} />;
}

export default Counter;
