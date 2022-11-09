import OgSearchInput from '../components/SearchInput';
import { useContextDispatch, searchTitle } from './Store';

function SearchInput() {
  const dispatch = useContextDispatch();

  return <OgSearchInput onSearchTitle={(title) => dispatch(searchTitle(title))} />;
}

export default SearchInput;