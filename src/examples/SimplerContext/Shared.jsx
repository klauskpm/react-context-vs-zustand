import Page from '../../components/Page';
import { ContextProvider } from './Store';
import Main from './Main';
import {FlexRow} from "../../components/FlexRow";

function SimplerContext() {
  return (
    <ContextProvider>
      <FlexRow>
        <Page>
          <Main />
        </Page>
        <Page>
          <Main />
        </Page>
      </FlexRow>
    </ContextProvider>
  );
}

export default SimplerContext;
