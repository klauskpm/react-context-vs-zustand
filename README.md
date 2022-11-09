# Context vs Zustand test

## Normal Context
This is using a pure context implementation with useReducer.

## Simpler Context
This is using a pure context implementation, but this time with useState and useCallback for a simpler DX.

## Simpler Context with Extras
This is the same as the Simpler Context implementation, but with use-context-selector.

## Zustand
This is a implementation that tries to mimick the Simpler Context implementation, but with Zustand.

## Zustand with Extras
This is the same as the Zustand implementation, but using devtools and immer middlewares and shallow.
