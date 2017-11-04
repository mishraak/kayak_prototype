import {createStore, compose,applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';
import axios from 'axios';


const register=[{
    registered:false,
    error:null
}]

const login=[{
    verifying:false,
    verified:false,
    token:null,
    user:null,
    filedata:null,
    error:null
}]

const filedetails = {
    filedata: null
}

const groupdata = {
    data:null,
    size:0
}



const defaultState= {
    posts,
    comments,
    register,
    login,
    filedetails,
    groupdata
}
//remember
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer,defaultState,middleware);

export const history = syncHistoryWithStore(browserHistory,store);

export default store;





