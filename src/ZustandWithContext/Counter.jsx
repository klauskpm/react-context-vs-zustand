import DisplayCounter from '../components/Counter';
import { useCount } from './Store';

function Counter() {
  const count = useCount();

  return <DisplayCounter count={count} />;
}

export default Counter;
