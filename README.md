# React Contextual State Management Benchmark

Tests results and documentation is still being written. Please, come back later.

> **Old tests and results**  
> If you wish to see the old test results, please check the [old README](README-old.md).
> There you will find instructions to see the old code, and see the results generated at the time.

## Explanations
- When I say **Contextual** it doesn't mean only `Context`, but other technologies that manage state in a contextual way, like `Zustand`, `Redux`, and others;
- The test at the moment is focusing only on `Context` and `Zustand`;
- The test also check the differences between Shared state (global) and Individual state (local);
- We are testing the project in 4 ways:
  - Triggered render;
  - Full render;
  - Project size;
  - DX (Developer Experience);

### How are we testing the project?
I've added to all available components a custom hook that stores each time the component is triggered and rendered.
This way we can see how those approaches are affecting the project.

#### Fairness
I created all projects with the closest to the same state structure, methods possible, and components.

**State structure:**
```javascript
const state = {
  count: 0,
  user: '',
  filters: {
    unchanged: 'unchanged value',
    title: ''
  }
}
```

**Used methods:**
- Increment the count;
- Login a user;
- Logout a user;
- Search for a title;

**Visually, the project looks like this:**
TBD


## Results

### Triggered Render

### Full Render

### Project Size

### DX (Developer Experience)