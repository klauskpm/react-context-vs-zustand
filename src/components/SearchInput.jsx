import {useStoreRenderCount} from "../hooks/useLogRenders";

function SearchInput({ onSearchTitle }) {
  useStoreRenderCount('Components', 'SearchInput')
  return <input onInput={(e) => onSearchTitle(e.target.value)}/>;
}

export default SearchInput;