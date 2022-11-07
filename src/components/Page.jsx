import './Page.css';

import ChildComp from './ChildComp';
import SiblingComp from './SiblingComp';

function Page({ children }) {
  return (
    <>
      <div className="App">
        <h1>React</h1>
        <div className="card">
          {children}
          <ChildComp />
        </div>
      </div>
      <SiblingComp />
    </>
  );
}

export default Page;
