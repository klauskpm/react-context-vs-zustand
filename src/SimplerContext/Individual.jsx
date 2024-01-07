import Page from '../components/Page';
import {ContextProvider} from './Store';
import Main from './Main';
import {FlexRow} from "../components/FlexRow";

function SimplerContext() {
  return (
    <FlexRow>
      <ContextProvider>
        <Page>
          <Main/>
        </Page>
      </ContextProvider>
      <ContextProvider>
        <Page>
          <Main/>
        </Page>
      </ContextProvider>
    </FlexRow>
  );
}

export default SimplerContext;
