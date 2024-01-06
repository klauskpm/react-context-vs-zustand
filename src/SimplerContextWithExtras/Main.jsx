import Counter from './Counter';
import Increaser from './Increaser';
import User from './User';
import UserButtons from './UserButtons';
import SearchInput from './SearchInput';
import ComplexValues from './ComplesValues';
import Title from './Title';
import {useStoreRenderCount} from "../hooks/useLogRenders";

function Main() {
  useStoreRenderCount('SimplerContextWithExtras', 'Main');
  return (
    <>
      <p>Simpler Context with Extras</p>
      <Increaser/>
      <Counter/>
      <UserButtons/>
      <User/>
      <SearchInput/>
      <Title/>
      <ComplexValues/>
    </>
  );
}

export default Main;
