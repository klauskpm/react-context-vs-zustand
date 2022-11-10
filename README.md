# Context vs Zustand test
![](/public/app-look.png)

## Ranking

1. Zustand (3 + 6 + 0 + 6 = 15)
2. Zustand with Extras (6 + 0 + -4 + 3 = 5)
3. Simpler Context with Extras (0 + 3 + -2 + 0 = 1)
4. Normal Context (-2 + -2 + 6 + -4 = -2)
5. Simpler Context (-4 + -4 + 3 + -2 = -7)


### Categories
||1|2|3|4|5|
|-|-|-|-|-|-|
|rerenders|Zustand with Extras|Zustand|Simpler Context with Extras|Normal Context|Simpler Context|
|render time|Zustand|Simpler Context with Extras|Zustand with Extras|Normal Context|Simpler Context|
|project size|Normal Context|Simpler Context|Zustand|Simpler Context with Extras|Zustand with Extras|
|DX (store lines)|Zustand|Zustand with Extras|Simpler Context with Extras|Simpler Context|Normal Context|

### Ranking points
1. 6
2. 3
3. 0
4. -2
5. -4

## Tests summaries

Small explanations on what `with Extras` mean:
- **Simpler Context with Extras** is a simpler context solution using `use-context-selector` to improve rerenders;
- **Zustand with Extras** is a Zustand solution using its internal middlewares for `immer` and `devtools`, and the `shallow` comparison script
  - `immer` middleware is to help simplifying our DX when updating complex states
  - `devtools` middleware is to send the action to Redux DevTools, enabling better debugging and state replayability
  - `shallow` is an internal function that helps returning complex states doing a shallow comparison

### Rerenders on actions
||Normal Context|Simpler Context|Simpler Context with Extras|Zustand|Zustand with Extras|
|-|-|-|-|-|-|
|increase count|9|14|8|4|4|
|increase count (excluding context)|6|12|5|4|4|
|login|9|16|7|4|2|
|login (excluding context)|6|14|4|4|2|
|search "a"|10|14|6|4|2|
|search "a" (excluding context)|7|12|3|4|2|

### Render speed on actions (is ms)
||Normal Context|Simpler Context|Simpler Context with Extras|Zustand|Zustand with Extras|
|-|-|-|-|-|-|
|increase count|2.1|3.9|1.3|0.9|1.6|
|login|2.8|4.2|1.2|1.1|1.8|
|search "a"|3|3.1|0.6|1.2|1.3|

### "Project" size (in KB)
||Normal Context|Simpler Context|Simpler Context with Extras|Zustand|Zustand with Extras|
|-|-|-|-|-|-|
|total|149.16|149.44|151.4|150.64|160.85|
|extra (-149.16)|0|0.28|2.24|1.48|11.69|

### DX
As this can be very personal, I'm using the number of lines we need to write to achive the same store.

||Normal Context|Simpler Context|Simpler Context with Extras|Zustand|Zustand with Extras|
|-|-|-|-|-|-|
|lines|85|53|51|33|40|


## Normal Context
This is using a pure context implementation with useReducer.

### Performance by actions

1) **increase count**
![](/packages-analyze/normal-context/profile-increase-count.png)

2) **login**
![](/packages-analyze/normal-context/profile-login.png)

3) **search "a"**
![](/packages-analyze/normal-context/profile-search-title.png)

### Project total size

![](/packages-analyze/normal-context/size.png)

## Simpler Context
This is using a pure context implementation, but this time with useState and useCallback for a simpler DX.

1) **increase count**
![](/packages-analyze/simpler-context/profile-increase-count.png)

2) **login**
![](/packages-analyze/simpler-context/profile-login.png)

3) **search "a"**
![](/packages-analyze/simpler-context/profile-search-title.png)

### Project total size

![](/packages-analyze/simpler-context/size.png)

## Simpler Context with Extras
This is the same as the Simpler Context implementation, but with use-context-selector.

1) **increase count**
![](/packages-analyze/simpler-context-with-extras/profile-increase-count-1.png)
![](/packages-analyze/simpler-context-with-extras/profile-increase-count-2.png)

2) **login**
![](/packages-analyze/simpler-context-with-extras/profile-login-1.png)
![](/packages-analyze/simpler-context-with-extras/profile-login-2.png)

3) **search "a"**
![](/packages-analyze/simpler-context-with-extras/profile-search-title-1.png)
![](/packages-analyze/simpler-context-with-extras/profile-search-title-2.png)

### Project total size

![](/packages-analyze/simpler-context-with-extras/size.png)

## Zustand
This is a implementation that tries to mimick the Simpler Context implementation, but with Zustand.

1) **increase count**
![](/packages-analyze/zustand/profile-increase-count.png)

2) **login**
![](/packages-analyze/zustand/profile-login.png)

3) **search "a"**
![](/packages-analyze/zustand/profile-search-title.png)

### Project total size

![](/packages-analyze/zustand/size.png)

## Zustand with Extras
This is the same as the Zustand implementation, but using devtools and immer middlewares and shallow.

1) **increase count**
![](/packages-analyze/zustand-with-extras/profile-increase-count.png)

2) **login**
![](/packages-analyze/zustand-with-extras/profile-login.png)

3) **search "a"**
![](/packages-analyze/zustand-with-extras/profile-search-title.png)

### Project total size

![](/packages-analyze/zustand-with-extras/size.png)
