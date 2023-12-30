import {useStoreRenderCount} from "../hooks/useLogRenders";

function IncreaseCounterButton({ onClick }) {
  useStoreRenderCount('Components', 'IncreaseCounterButton');
  return (
    <button onClick={onClick}>Increase count!</button>
  );
}

export default IncreaseCounterButton;
