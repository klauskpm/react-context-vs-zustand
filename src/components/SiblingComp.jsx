import {useStoreRenderCount} from "../hooks/useLogRenders";

function SiblingComp() {
  useStoreRenderCount('Components', 'SiblingComp')
  return <p>Sibling component</p>;
}

export default SiblingComp;
