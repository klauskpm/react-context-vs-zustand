# Context vs Zustand test

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
