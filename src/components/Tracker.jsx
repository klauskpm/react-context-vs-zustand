import {useState} from "react";


export const Tracker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleOpen}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && (
        <div>
          <p>Content</p>
        </div>
      )}
    </>
  )
}