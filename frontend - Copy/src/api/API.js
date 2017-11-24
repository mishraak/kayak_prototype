import axios from 'axios';

const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3300';


const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/users/dologin`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getflights = (searchCriteria) =>
    axios.post(api + '/search/flights/',searchCriteria)
        .then(res => {
            console.log('response from server chck', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getCars = (searchCriteria) =>
    axios.post(api + '/search/cars/',searchCriteria)
        .then(res => {
            console.log('response from server chck', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });
export const getHotels = (searchCriteria) =>
    axios.post(api + '/search/hotels/',searchCriteria)
        .then(res => {
            console.log('response from server chck', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });
export const book = (payload) =>
    axios.post(api + '/search/book/',payload,{withCredentials:true})
        .then(res => {
            console.log('response from server chck', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });



// export const getmyfiles = () =>
//     fetch(`${api}/files/myfiles`, {
//         method: 'get',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(res => console(res.body.message))
//
//         .catch(error => {
//             console.log("This is error.");
//             return error;
//         });
// export const uploadFile = (payload) =>
//     fetch(`${api}/files/upload`, {
//         method: 'POST',
//         body: payload
//     }).then(res => {
//         return res.status;
//     }).catch(error => {
//         console.log("This is error");
//         return error;
//     });