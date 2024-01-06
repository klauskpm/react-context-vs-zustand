import './Tracker.css';

import {useState} from "react";

export const Tracker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className='tracker'>
      {isOpen && (
        <div className='dialog'>
          <p>Tracker</p>
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