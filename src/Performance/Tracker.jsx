import './Tracker.css';

import {useState} from "react";
import {resetLogs} from "./renderCount";
import {RenderingTrackingTable} from "./RenderingTrackingTable";

export const Tracker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className='tracker'>
      {isOpen && (
        <div className='dialog'>
          <p>Tracker</p>
          <RenderingTrackingTable/>
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