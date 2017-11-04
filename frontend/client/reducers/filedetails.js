import axios from 'axios';
import localstorage from 'local-storage';

function firePost(url,action){
    axios.post(url,action).then(function (response) {
            
        console.log(response);
        return response;
         })
         .catch(function (error) {
           console.log(error);
         })
}

 function filedetails (state =[], action) {
     
     console.log(action);

     switch(action.type){ 
        case 'UPLOAD_FILE':
            fetch("http://localhost:8080/routes/upload",
            {
                method: 'POST',                                                     
                body: action.payload
            })
            .then(res => {
                console.log(res);
                //return res.status;        
                return 200;
            })
            .catch(error => {
                    console.log(error);
                    return error;
            });
            console.log(...state);
            return [
                state
             ]
        break;
        case 'GET_ALL_FILES':
        console.log('GET_ALL_FILES...');
        console.log(action.data)
        return {...state[0],filedata:action.data};
        break; 
        default:
        return state;
    }
}

export default filedetails;


