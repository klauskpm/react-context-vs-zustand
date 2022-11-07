import { useCount, useIncreaseCount } from './Store';
import Page from '../components/Page';

function Main() {
  const count = useCount();
  const increaseCount = useIncreaseCount();

  return (
    <Page>
      <p>Simpler Context</p>
      <button onClick={() => increaseCount()}>count is {count}</button>
    </Page>
  );
}

export default Main;
