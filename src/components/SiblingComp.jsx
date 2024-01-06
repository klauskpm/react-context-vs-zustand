import {useStoreRenderCount} from "../hooks/useLogRenders";
import {borderStyle} from "../styles/border";

function SiblingComp() {
  useStoreRenderCount('Components', 'SiblingComp')
  return <p style={borderStyle}>Sibling component</p>;
}

export default SiblingComp;
