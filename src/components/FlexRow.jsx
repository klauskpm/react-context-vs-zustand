import {useStoreRenderCount} from "../hooks/useStoreRenderCount";
import {borderStyle} from "../styles/border";

export const FlexRow = ({ children }) => {
  useStoreRenderCount('Components', 'FlexRow');

  return (
    <div style={{ display: 'flex', flexDirection: 'row', ...borderStyle }}>
      {children}
    </div>
  );
}