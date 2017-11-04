import axios from 'axios';
import localstorage from 'local-storage';

export function increment(index){
    return{
        type:"INCREMENT_LIKES",
        index
    }
}
export function registers(firstname,lastname,email,password){
   
    return {
        type:"REGISTER",
        firstname,
        lastname,
        email,
        password
    }
}
/*
export function loginForms(email,password){

    return {
        type:"LOG_IN",
        email,
        password,
        info :  axios.post('http://localhost:8080/routes/login',{email,password})
    }
}*/
export function getfiles(payload){
    console.log('13 million')
    console.log(payload);
    return {
        type:'GET_FILES',
        data: payload
    }
}
export function loginForms(email){
  
        return {
            type:'GET_FILES',
            data: localstorage.get('fileData')
        }
    
}
export function uploadFile(payload){
    return{
        type:"UPLOAD_FILE",
        payload
    }
}

   
   
export function verifying(token,user){

    return {
        type: 'LOGIN_VERIFY',
        token,
        user,
        filedata
    }
}

export function Addcomment(postId, author, comment){
    
    return{
        type:"ADD_COMMENT",
        postId,
        author,
        comment
    }
}
export function removeComment(index, postId){
    return{
        type:"REMOVE_COMMENT",
        index,
        postId
    }
}

export function getallfiles(data){
    console.log("rz34 has been called...");
    console.log(data);
    return{
        type:"GET_ALL_FILES",
        data
    }
   
}


export function updateFileList(data){
   
    console.log(data);
    return{
        type:"UPDATE_ALL_FILES",
        data
    }
   
}

export function getGroups(data,size){
    return{
        type:"GET_GROUPS",
        data,
        size
    }
}
