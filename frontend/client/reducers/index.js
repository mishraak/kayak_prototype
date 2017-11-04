import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import posts from "./posts";
import comments from "./comments";
import register from "./register";
import login from "./login";
import groupdata from "./groupdata";

import filedetails from "./filedetails";
//here we need to add the mysql that gets the thing

const rootReducer = combineReducers({posts,comments,register,login, filedetails,groupdata,routing:routerReducer});

export default rootReducer;