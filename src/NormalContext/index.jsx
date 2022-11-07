import { ContextProvider } from './Store';
import Main from './Main';

function NormalContext() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}

export default NormalContext;
