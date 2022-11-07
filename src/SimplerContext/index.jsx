import Page from '../components/Page';
import { ContextProvider } from './Store';
import Main from './Main';

function SimplerContext() {
  return (
    <ContextProvider>
      <Page>
        <Main />
      </Page>
    </ContextProvider>
  );
}

export default SimplerContext;
