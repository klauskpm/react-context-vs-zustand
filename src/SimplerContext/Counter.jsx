import CounterShower from '../components/CounterShower';
import { useCount } from './Store';

function Counter() {
  const count = useCount();

  return <CounterShower count={count} />;
}

export default Counter;
