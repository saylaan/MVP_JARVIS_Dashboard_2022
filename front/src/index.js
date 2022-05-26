import React from 'react';
import ReactDOM from 'react-dom';
/* ------------- || Routing Imports || ------------- */
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
/* ------------- || Register Imports || ------------- */
import registerServiceWorker from './registerServiceWorker';
/* ------------- || Store Redux Imports || ------------- */
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
/* ------------- || Main App|| ------------- */
import App from './App';
/* ------------- || Style & Assets Imports || ------------- */
// import './index.css';
/* ------------- || Init || ------------- */
const hist = createBrowserHistory();
let persistor = persistStore(store);

// ==============================|| REACT DOM RENDER  ||============================== //
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router history={hist}>
                    <App />
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
registerServiceWorker();
