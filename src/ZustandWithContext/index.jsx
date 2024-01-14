import Page from '../components/Page';
import Main from './Main';
import {FlexRow} from "../components/FlexRow";
import {ContextProvider} from "./Store";

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
