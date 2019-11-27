
# Demo: React-youtube adaptive loading with mix of network, memory and hardware concurrency in React

[Youtube React](https://github.com/marvtron/youtube-react) is a Youtube clone built in React, Redux, Redux-saga. UI-wise this application looks almost exactly like the original Youtube application.

This version of React Youtube Adaptive Loading uses network hook, memory hook, hardware concurrency hook to determine whether to load low-fidelity or high-fidelity experience based on the user's effective connection type (e.g 2G -> lo-fi, 4G -> hi-fi), memory status, CPU status.

[Live Demo](https://adaptive-loading.web.app/react-youtube-adaptive-loading/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Related projects

* [React Adaptive Loading Hooks & Utilities](https://github.com/GoogleChromeLabs/react-adaptive-hooks)
* [Adaptive Loading demos](https://github.com/GoogleChromeLabs/adaptive-loading)

## Notes

You can find Adaptive Loading pattern usage [here](https://glitch.com/edit/#!/anton-karlovskiy-adaptive-youtube?path=src/utils/hooks.js:17:0) in the codebase.  
You may want to look at this [Adaptive Loading Microsite](https://adaptive-loading.web.app/).

## Installation

```
git clone https://api.glitch.com/git/anton-karlovskiy-adaptive-youtube
npm install
npm start
npm run build
```

## Glitch Source
* [Link to Glitch App](https://anton-karlovskiy-adaptive-youtube.glitch.me/)
* [Link to Project on Glitch](https://glitch.com/~anton-karlovskiy-adaptive-youtube/)
