import Page from '../../components/Page';
import Main from './Main';
import {ContextProvider} from "./Store";
import {FlexRow} from "../../components/FlexRow";

function Zustand() {
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

export default Zustand;
