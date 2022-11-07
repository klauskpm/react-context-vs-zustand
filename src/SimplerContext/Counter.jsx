import CounterDisplayer from '../components/CounterDisplayer';
import { useCount } from './Store';

function Counter() {
  const count = useCount();

  return <CounterDisplayer count={count} />;
}

export default Counter;
