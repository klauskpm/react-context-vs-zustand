import {useStoreRenderCount} from "../hooks/useLogRenders";
import {borderStyle} from "../styles/border";

function SearchInput({ onSearchTitle }) {
  useStoreRenderCount('Components', 'SearchInput')
  return <input onInput={(e) => onSearchTitle(e.target.value)} style={borderStyle}/>;
}

export default SearchInput;