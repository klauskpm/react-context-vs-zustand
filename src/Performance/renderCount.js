/**
 * This object is used to store the render counts of all components
 * @type {{[string]: {triggered: number, finished: number}}}
 */
export let storedRenderCounts = {};
export const logRenders = () => {
  const modules = Object.keys(storedRenderCounts);
  modules.forEach(module => {
    console.group(module)
    console.table(storedRenderCounts[module]);
    console.groupEnd();
  });
};

export const resetLogs = () => {
  Object.keys(storedRenderCounts).forEach(module => {
    Object.keys(storedRenderCounts[module]).forEach(componentName => {
      storedRenderCounts[module][componentName] = {triggered: 0, finished: 0};
    });
  });
};

window.storedRenderCounts = storedRenderCounts;
window.logRenders = logRenders;
window.resetLogs = resetLogs;