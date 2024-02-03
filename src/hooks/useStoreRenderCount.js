import {useEffect} from "react";
import {storedRenderCounts} from "../Performance/renderCount";

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