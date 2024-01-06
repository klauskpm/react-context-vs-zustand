import './Tracker.css';

import {useEffect, useState} from "react";
import {storedRenderCounts, resetLogs} from "./renderCount";

export const Tracker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setTimer] = useState(0);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  const modules = Object.keys(storedRenderCounts);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='tracker'>
      {isOpen && (
        <div className='dialog'>
          <p>Tracker</p>
          {/* renders table from the storedRenderCounts */}
          <table>
            <thead>
            <tr>
              <th>Module / Component</th>
              <th>Trigger Count</th>
              <th>Finished Count</th>
            </tr>
            </thead>
            <tbody>
            {modules.map((module) => (
              Object.keys(storedRenderCounts[module]).map((component) => (
                <tr key={module + " / " + component}>
                  <td>{module + " / " + component}</td>
                  <td>{storedRenderCounts[module][component].triggered}</td>
                  <td>{storedRenderCounts[module][component].finished}</td>
                </tr>
              ))
            ))}
            </tbody>
          </table>
          <button onClick={resetLogs}>Reset tracking</button>
          <button onClick={closeDialog}>
            Close Tracker
          </button>
        </div>
      )}
      <button onClick={openDialog}>
        Open Tracker
      </button>
    </div>
  )
}