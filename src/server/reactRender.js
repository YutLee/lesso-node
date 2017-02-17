import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const app = () => (
  <div></div>
);

function reactRender(todoApp = app, App = app, props = '') {
  const store = createStore(todoApp);
  // 把组件渲染成字符串
  const initialState = store.getState();
  let propsString = '';
  // 把组件渲染成字符串
  const html = renderToString(
    <Provider store={store}>
      <App username={props} />
    </Provider>
  );
  // console.log(initialState);
  return {initialState, html};
}

export default reactRender;
