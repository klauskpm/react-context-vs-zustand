import {useStoreRenderCount} from "../hooks/useStoreRenderCount";
import {borderStyle} from "../styles/border";

function IncreaseCounterButton({ onClick }) {
  useStoreRenderCount('Components', 'IncreaseCounterButton');
  return (
    <button onClick={onClick} style={borderStyle}>Increase count!</button>
  );
}

export default IncreaseCounterButton;
