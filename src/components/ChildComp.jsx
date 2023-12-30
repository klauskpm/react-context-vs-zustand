import {useStoreRenderCount} from "../hooks/useLogRenders";

function ChildComp() {
  useStoreRenderCount('Components', 'ChildComp');

  return <p>Child component</p>;
}

export default ChildComp;
