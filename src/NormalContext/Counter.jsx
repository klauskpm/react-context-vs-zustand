import CounterShower from '../components/CounterShower';
import { useContextState } from './Store';

function Counter() {
  const state = useContextState();

  return <CounterShower count={state.count} />;
}

export default Counter;
