import axios from 'axios';

function firePost(url,action){
    axios.post(url,action).then(function (response) { 
        return response;
         })
         .catch(function (error) {
           console.log(error);
         })
}
function register(state = [], action){
    switch(action.type){
        case 'REGISTER':
         firePost("http://localhost:8080/routes/register",action);
         console.log(state);
         const newState = JSON.parse(JSON.stringify(state));
         return [{...newState[0],registered:true}]
         break;
        default:
         return state;
    }
}
export default register;