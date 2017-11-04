import React from 'react';
import {render} from 'react-dom';
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'
import Register from './components/Register'
import Login from './components/Login'
import FileDashBoard from './components/FileDashBoard'
import Groups from './components/Groups'

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store , {history} from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
               <IndexRoute component={Register}></IndexRoute>
              
               <Route path="/login" component={Login}></Route>
               <Route path="/photogrid" component={PhotoGrid}></Route>
               <Route path="/FileDashBoard" >
                <IndexRoute component={FileDashBoard}></IndexRoute>
                <Route path="/FileDashBoard/Groups" component={Groups}> </Route>
               </Route>
               <Route path="/view/:photoid" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
   
)


render(router, document.getElementById('root'));
