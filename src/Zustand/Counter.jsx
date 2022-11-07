import { useCount } from './Store';

function Counter() {
  const count = useCount();

  return (
    <p>Total count: {count}</p>
  )
}

export default Counter;
