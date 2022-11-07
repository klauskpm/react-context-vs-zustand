import { useMyContext, increaseCount } from './Store';
import Page from '../components/Page';

function Main() {
  const [state, dispatch] = useMyContext();

  return (
    <Page>
      <p>Normal Context</p>
      <button onClick={() => dispatch(increaseCount())}>
        count is {state.count}
      </button>
    </Page>
  );
}

export default Main;
