import {useEffect, useRef} from "react";

const storeRenderCounts = {};
export const useStoreRenderCount = (module, componentName) => {
  const renders = useRef(0);
  if (!storeRenderCounts[module]) {
    storeRenderCounts[module] = {};
  }
  storeRenderCounts[module][componentName] = renders.current;

  renders.current++;
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