function groupdata(state =[], action){
        return {
            ...state[0],data:action.data,size:action.size
        }
 }
 export default groupdata;