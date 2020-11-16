import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './reducer/rootReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {addCharacterById} from './action/rootAction';

const store = createStore(rootReducer);
store.subscribe(()=>console.log(store.getState()));
store.dispatch(addCharacterById(2));

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
)