import React from 'react';
import ReactDOM from 'react-dom';


const rootEl = document.getElementById('root');


const App = () => {
    return (
        <div>
            <h1 style={{ 'textAlign': 'center'}}> Snake Word Of The Day </h1>
        </div>
        );
};

const renderApp = () => {
    ReactDOM.render(
        <App />, rootEl
    );
}

renderApp();


// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}