import axios from 'axios';
import localstorage from 'local-storage';

module.exports={
  fetch_files: function (email){
    var sendingPayload={
        data:[]
    };
    axios.get("http://localhost:8080/routes/getalldata",{params:{email:email}}).then(res=>{
        console.log(res.data);
        res.data.forEach(function(element) {
           sendingPayload.data.push(element)
    }); 

});
console.log("this is sending payload")
console.log(sendingPayload);
return sendingPayload;
}
}

