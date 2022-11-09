import OgSearchInput from '../components/SearchInput';
import { useSearchTitle } from './Store';

function SearchInput() {
  const searchTitle = useSearchTitle();

  return <OgSearchInput onSearchTitle={searchTitle} />;
}

export default SearchInput;