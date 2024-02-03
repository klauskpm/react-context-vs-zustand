import {useStoreRenderCount} from "../hooks/useStoreRenderCount";
import {borderStyle} from "../styles/border";

function ChildComp() {
  useStoreRenderCount('Components', 'ChildComp');

  return <p style={borderStyle}>Child component</p>;
}

export default ChildComp;
