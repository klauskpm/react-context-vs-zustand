import Counter from './Counter';
import Increaser from './Increaser';
import User from './User';
import UserButtons from './UserButtons';

import { useFilteredTitle, useSearchTitle, useComposedValue } from './Store';

function SearchInput() {
  const searchTitle = useSearchTitle();

  return <input onInput={(e) => searchTitle(e.target.value)}/>;
}

function Title() {
  const title = useFilteredTitle();

  return <p>Filtered title: {title}</p>;
}

function ComplexValue() {
  const { unchanged, count } = useComposedValue();
  return (
    <div>
      <p>Complex value:</p>
      <ul>
        <li>{unchanged}</li>
        <li>{count}</li>
      </ul>
    </div>
  );
}

function Main() {
  return (
    <>
      <p>Zustand with Extras</p>
      <Increaser />
      <Counter />
      <UserButtons />
      <User/>
      <SearchInput />
      <Title />
      <ComplexValue />
    </>
  );
}

export default Main;
