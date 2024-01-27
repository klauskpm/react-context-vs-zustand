import OgSearchInput from '../../components/SearchInput';
import { useContextDispatch, searchTitle } from './Store';
import {useStoreRenderCount} from "../../hooks/useLogRenders";

function SearchInput() {
  useStoreRenderCount('NormalContext', 'SearchInput');
  const dispatch = useContextDispatch();

  return <OgSearchInput onSearchTitle={(title) => dispatch(searchTitle(title))} />;
}

export default SearchInput;