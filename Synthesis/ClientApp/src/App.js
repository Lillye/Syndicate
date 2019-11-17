import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Grid from './components/Grid';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Grid />
            </Provider>
        );
    }
}

export default App;

