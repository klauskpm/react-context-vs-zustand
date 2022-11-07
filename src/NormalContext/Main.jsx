import { useMyContext, increaseCount } from './Store';

function Main() {
  const [state, dispatch] = useMyContext();

  return (
    <>
      <p>Normal Context</p>
      <button onClick={() => dispatch(increaseCount())}>
        count is {state.count}
      </button>
    </>
  );
}

export default Main;
