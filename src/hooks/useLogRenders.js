import {useEffect} from "react";

const storedRenderCounts = {};
const logRenders = () => {
  const modules = Object.keys(storedRenderCounts);
  modules.forEach(module => {
    console.group(module)
    console.table(storedRenderCounts[module]);
    console.groupEnd();
  });
};

const resetLogs = () => {
  Object.keys(storedRenderCounts).forEach(module => {
    Object.keys(storedRenderCounts[module]).forEach(componentName => {
      storedRenderCounts[module][componentName] = {triggered: 0, finished: 0};
    });
  });
};

export const useStoreRenderCount = (module, componentName) => {
  if (!storedRenderCounts[module]) {
    storedRenderCounts[module] = {};
  }
  if (!storedRenderCounts[module][componentName]) {
    storedRenderCounts[module][componentName] = {triggered: 0, finished: 0};
  }

  storedRenderCounts[module][componentName].triggered++;

  useEffect(() => {
    storedRenderCounts[module][componentName].finished++;
  });
};

export const useLogRenders = () => {
  useEffect(() => {
    logRenders();
  });
};

window.storedRenderCounts = storedRenderCounts;
window.logRenders = logRenders;
window.resetLogs = resetLogs;