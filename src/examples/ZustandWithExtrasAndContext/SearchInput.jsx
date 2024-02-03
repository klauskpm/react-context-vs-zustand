import OgSearchInput from '../../components/SearchInput';
import { useSearchTitle } from './Store';
import {useStoreRenderCount} from "../../hooks/useStoreRenderCount";

function SearchInput() {
  const searchTitle = useSearchTitle();
  useStoreRenderCount('ZustandWithExtrasAndContext', 'SearchInput');

  return <OgSearchInput onSearchTitle={searchTitle} />;
}

export default SearchInput;