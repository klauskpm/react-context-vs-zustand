import {useEffect} from "react";

const storeRenderCounts = {};
export const useStoreRenderCount = (module, componentName) => {
  if (!storeRenderCounts[module]) {
    storeRenderCounts[module] = {};
  }
  if (!storeRenderCounts[module][componentName]) {
    storeRenderCounts[module][componentName] = {triggered: 0, finished: 0};
  }

  storeRenderCounts[module][componentName].triggered++;

  useEffect(() => {
    storeRenderCounts[module][componentName].finished++;
  });
};

export const useLogRenders = () => {
  useEffect(() => {
    const modules = Object.keys(storeRenderCounts);
    modules.forEach(module => {
      console.group(module)
      // console.log(`%c${}`, 'font-weight: bold; font-size: 1.2em;');
      console.table(storeRenderCounts[module]);
      console.groupEnd();
    });
  });
};