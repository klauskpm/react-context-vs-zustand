import Page from '../components/Page';
import Main from './Main';
import {ContextProvider} from "./Store";

function Zustand() {
  return (
      <>
          <ContextProvider>
              <Page>
                  <Main />
              </Page>
          </ContextProvider>
          <ContextProvider>
              <Page>
                  <Main />
              </Page>
          </ContextProvider>
      </>
  );
}

export default Zustand;
