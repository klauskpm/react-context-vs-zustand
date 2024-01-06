import {storedRenderCounts} from "./renderCount";
import {useEffect, useState} from "react";

export const RenderingTrackingTable = () => {
  const [, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const modules = Object.keys(storedRenderCounts);

  return (
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
  )
}