import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const app = () => (
  <div></div>
);

function todos(state = {}, action = {}) {
  return Objcet.assgin({}, state);
}

function reactRender(todoApp = todos, App = app) {
  const store = createStore(todoApp);
  // 把组件渲染成字符串
  const initialState = store.getState();

  // 把组件渲染成字符串
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // console.log(initialState);
  return {initialState, html};
}

export default reactRender;
