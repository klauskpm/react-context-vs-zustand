function SearchInput({ onSearchTitle }) {
  return <input onInput={(e) => onSearchTitle(e.target.value)}/>;
}

export default SearchInput;