import './Page.css';

import ChildComp from './ChildComp';
import SiblingComp from './SiblingComp';

function Page({ children }) {
  return (
    <>
      <div className="App">
        <h1>Not Vite + React</h1>
        <div className="card">
          {children}
          <ChildComp />
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <SiblingComp />
    </>
  );
}

export default Page;
