import Page from '../components/Page';
import Main from './Main';
import {FlexRow} from "../components/FlexRow";

function Zustand() {
  return (
    <FlexRow>
      <Page>
        <Main />
      </Page>
      <Page>
        <Main />
      </Page>
    </FlexRow>
  );
}

export default Zustand;
