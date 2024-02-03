import './Page.css';

import ChildComp from './ChildComp';
import SiblingComp from './SiblingComp';
import {useStoreRenderCount} from "../hooks/useStoreRenderCount";
import {borderStyle} from "../styles/border";

function Page({ children }) {
  useStoreRenderCount('Components', 'Page');
  return (
    <div style={borderStyle}>
      <div className="App">
        <h1>React</h1>
        <div className="card">
          {children}
          <ChildComp />
        </div>
      </div>
      <SiblingComp />
    </div>
  );
}

export default Page;
