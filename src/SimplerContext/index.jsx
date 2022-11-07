import { ContextProvider } from './Store';
import Main from './Main';

function SimplerContext() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}

export default SimplerContext;
