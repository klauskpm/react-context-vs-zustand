import {useStoreRenderCount} from "../hooks/useLogRenders";

export const FlexRow = ({ children }) => {
  useStoreRenderCount('Components', 'FlexRow');

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {children}
    </div>
  );
}