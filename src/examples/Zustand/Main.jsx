import Counter from './Counter';
import Increaser from './Increaser';
import User from './User';
import UserButtons from './UserButtons';
import SearchInput from './SearchInput';
import ComplexValues from './ComplesValues';
import Title from './Title';
import {useResetStore} from "./Store";
import {useStoreRenderCount} from "../../hooks/useStoreRenderCount";

function Main() {
  useResetStore();
  useStoreRenderCount('Zustand', 'Main');

  return (
    <>
      <p>Zustand</p>
      <Increaser />
      <Counter />
      <UserButtons />
      <User/>
      <SearchInput />
      <Title />
      <ComplexValues />
    </>
  );
}

export default Main;
