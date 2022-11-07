import { useState } from 'react';
import Page from './components/Page';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={() => increaseCount()}>Increase count</button>
      <p>Count: {count}</p>
    </>
  )
}

function App() {
  return (
    <Page>
        <Counter />
    </Page>
  );
}

export default App;
