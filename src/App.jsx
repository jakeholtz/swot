import React from 'react';
import ReactDOM from 'react-dom';
import style from "./styles.less";

const rootEl = document.getElementById('root');

const App = () => {
  return (
    <div className={ style['main'] }>
      <h1 className={ style['main-title'] }> Snake Word Of The Day </h1>
      <div className={ style['entry'] }>
        <h3 className={ style['entry-name'] }>Serpentine</h3>
        <div className={ style['entry-content'] }>
          <span>noun </span>
          <span className={ style['entry-type'] }>[<strong>sur</strong>-puhn-teen]</span>
          <div className={ style['break'] }></div>
          <span className={ style['entry-definition'] }>Of or relating to a serpent. </span>
        </div>
      </div>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(
      <App />, rootEl
  );
}

renderApp();

// Checks for changes / hot-reload
if (module.hot) module.hot.accept('./components/App.jsx', () => renderApp());