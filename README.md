# React Personal State Management Benchmark

> !DISCLAIMER!  
> This is NOT a scientific or definitive benchmark or test.
> This is a personal test, done in my free time, to check how the state management libraries are performing in a real-world scenario.
> I did try to make it as fair as possible, but don't take it as the truth.

Tests results and documentation is still being written. Please, come back later.

## Introduction
This is a test to check how different state management libraries are performing in a real-world scenario.

- Libraries/techniques being tested
  - Context API
  - Zustand
- Types of state management
  - Shared state (global)
  - Individual state (local)
- What is being evaluated
  - Triggered render
  - Full render
  - Project size
  - DX (Developer Experience)

## How are we testing the project?
Each "project" was created in a way that it is as close as possible to each other.
They have a similar, if not the same, data structure, methods, and components.
There are components that do actions, others that contain state, and some that are just there to see the effects of sibling and child components.

### Project structure
On this project you will find the following:
- `src/examples`: each example project is located;
  - `src/examples/*/Store`: the store for each example;
  - `src/examples/*/(Shared|Individual|index)`: the page component that is rendered at the end;
- `src/Performance`: all the logic to count and show full and triggered renders;
- `src/components`: all generic components that are used in the examples;
- `packages-analyze`: where all the results are stored;

For each evaluation, you will find the explanation on their own section.


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

**Methods:**
- Increment the count;
- Decrement the count (not used);
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

---

> **Old tests and results**  
> If you wish to see the old test results, please check the [old README](README-old.md).
> There you will find instructions to see the old code, and see the results generated at the time.