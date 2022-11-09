import { useSearchTitle } from './Store';

function SearchInput() {
  const searchTitle = useSearchTitle();

  return <input onInput={(e) => searchTitle(e.target.value)}/>;
}

export default SearchInput;