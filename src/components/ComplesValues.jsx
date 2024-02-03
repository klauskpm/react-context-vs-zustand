import {useStoreRenderCount} from "../hooks/useStoreRenderCount";
import {borderStyle} from "../styles/border";

function ComplexValues({unchanged, count}) {
  useStoreRenderCount('Components', 'ComplexValues');

  return (
    <div style={borderStyle}>
      <p>Complex value:</p>
      <ul>
        <li>{unchanged}</li>
        <li>{count}</li>
      </ul>
    </div>
  );
}

export default ComplexValues;