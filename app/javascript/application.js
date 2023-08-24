// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Greeting from './greeting';
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Greeting />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);
