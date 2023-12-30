import {useStoreRenderCount} from "../hooks/useLogRenders";

function Counter({ count }) {
  useStoreRenderCount('Components', 'Counter');

  return (
    <p>Total count: {count}</p>
  )
}

export default Counter;
