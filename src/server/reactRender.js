import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const app = () => <div></div>;

function reactRender(App = app, preloadedState = {}, Reducer) {
  function reducer(state = preloadedState) {
    return Object.assign({}, state);
  }

  const store = Reducer ? createStore(Reducer, preloadedState) : createStore(reducer);
  // 把组件渲染成字符串
  const initialState = JSON.stringify(store.getState() || {});

  // 把组件渲染成字符串
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  return {initialState, html};
}

export default reactRender;
