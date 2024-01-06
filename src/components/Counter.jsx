import {useStoreRenderCount} from "../hooks/useLogRenders";
import {borderStyle} from "../styles/border";

function Counter({ count }) {
  useStoreRenderCount('Components', 'Counter');

  return (
    <p style={borderStyle}>Total count: {count}</p>
  )
}

export default Counter;
