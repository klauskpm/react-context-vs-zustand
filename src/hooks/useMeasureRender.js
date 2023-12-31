import {useEffect} from "react";
import afterFrame from "afterframe";

function measureInteractionNow(interactionName) {
  // performance.now() returns the number of ms
  // elapsed since the page was opened
  const startTimestamp = performance.now();

  return {
    end() {
      const endTimestamp = performance.now();
      console.log(`The ${interactionName} took`, Number((endTimestamp - startTimestamp).toFixed(4)), 'ms');
    },
  };
}

function measureInteractionMark(interactionName) {
  // Don’t do this
  performance.mark(interactionName + ' start');

  return {
    end() {
      performance.mark(interactionName + ' end');
      const measure = performance.measure(
        interactionName + ' duration',
        interactionName + ' start',
        interactionName + ' end',
      );
      console.log(`The ${interactionName} took`, Number((measure.duration).toFixed(4)), 'ms');
    },
  };
}

export const useMeasureRender = (module, componentName) => {
  const afIntNow = measureInteractionNow(`afterFrame now ${module}/${componentName} render`);
  const afIntMark = measureInteractionMark(`afterFrame mark ${module}/${componentName} render`);

  afterFrame(() => {
    afIntNow.end();
    afIntMark.end();
  });

  const ueIntNow = measureInteractionNow(`useEffect now ${module}/${componentName} render`);
  const ueIntMark = measureInteractionMark(`useEffect mark ${module}/${componentName} render`);

  useEffect(() => {
    ueIntNow.end();
    ueIntMark.end();
  });
}