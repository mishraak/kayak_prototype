import axios from 'axios';

const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3300';

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>    
    axios.post(api + '/users/dologin',payload)
        .then(res => {
            console.log('response from server chck', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        }); 

export const handleAddCar = (payload) =>    
    axios.post(api + '/search/addcars',{data : payload})
        .then(res => {
            console.log('response from server chck', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        }); 


export const handleAddFlight = (payload) =>    
    axios.post(api + '/search/addflights',{data : payload})
        .then(res => {
            console.log('response from server chck', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        }); 


export const handleAddHotel = (payload) =>    
    axios.post(api + '/search/addhotels',{data : payload})
        .then(res => {
            console.log('response from server chck', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        }); 


export const getflights = (searchCriteria) =>

    axios.post(api + '/search/flights/',searchCriteria)

        .then(res => {
            console.log('response from server chck', JSON.stringify(res.data));
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return [];
        });

export const getReturnFlights = (searchCriteria) =>

    axios.post(api + '/search/returnflights/',searchCriteria)

        .then(res => {
            console.log('response from server chck', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return [];
        });


export const getCars = (searchCriteria) =>
    axios.post(api + '/search/cars/',searchCriteria)
        .then(res => {
            console.log('response from server chck', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return [];
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



export const handleSignup = (payload) =>
    
    axios.post(api + '/users/signup',payload)
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

export const handleAbout = (payload) =>    
    axios.post(api + '/users/about',{email:payload})
        .then(res => {
            console.log('response from server chck', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const handleAboutChange = (payload) =>
    
    axios.post(api + '/users/aboutChange',{payload:payload})
        .then(res => {
            console.log('response from server chck', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getUserBookings = () =>

    axios.post(api + '/search/userBookings',{email:localStorage.getItem("username")})
        .then(res => {
            console.log('response from getUserBookings', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const log = (payload) =>

    axios.post(api + '/users/logPageClick',payload)
        .then(res => {
            console.log('response from logs', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getPageClicks = () =>

    axios.get(api + '/users/getPageClick')
        .then(res => {
            console.log('response from getPageClick', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const insertActivity = (node) =>

    axios.post(api + '/users/insertActivity',node)
        .then(res => {
            console.log('response from getPageClick', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const uploadFile = (payload) =>
    axios.post(api + '/users/uploadProfilePic', payload,{withCredentials:true})
        .then(res => {
            console.log('response from server fileupload', res.data.message);

            return res;
        })
        .catch(error => {
            console.log("This is error in fileupload API");
            return error;
        });
export const getMostPopularAirlines = (payload) =>
    axios.get(api + '/charts/getMostPopularAirlines')
        .then(res => {
            console.log('response from server getMostPopularAirlines', res.data);

            return res;
        })
        .catch(error => {
            console.log("This is error in getMostPopularAirlines API");
            return error;
        });
export const getMostPopularAirports = (payload) =>
    axios.get(api + '/charts/getMostPopularAirports')
        .then(res => {
            console.log('response from server getMostPopularAirports', res.data);

            return res;
        })
        .catch(error => {
            console.log("This is error in getMostPopularAirlines API");
            return error;
        });

export const searchFlight = (id) =>
    axios.post(api + '/charts/searchFlight',{id:id})
        .then(res => {
            console.log('response from server searchFlight', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error in searchFlight API");
            return error;
        });

export const searchCar = (id) =>
    axios.post(api + '/charts/searchCar',{id:id})
        .then(res => {
            console.log('response from server searchCar', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error in searchCar API");
            return error;
        });

export const searchHotel = (id) =>
    axios.post(api + '/charts/searchHotel',{id:id})
        .then(res => {
            console.log('response from server searchHotel', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error in searchHotel API");
            return error;
        });

export const updateFlights = (data) =>
    axios.post(api + '/search/updateFlights',{data:data})
        .then(res => {
            console.log('response from server searchCar', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error in searchCar API");
            return error;
        });
export const updateHotels = (data) =>
    axios.post(api + '/search/updateHotels',{data:data})
        .then(res => {
            console.log('response from server searchCar', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error in searchCar API");
            return error;
        });

export const updateCars = (data) =>
    axios.post(api + '/search/updateCars',{data:data})
        .then(res => {
            console.log('response from server searchCar', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error in searchCar API");
            return error;
        });

export const deleteProfile = () =>
    axios.post(api + '/search/deleteProfile',{data:localStorage.getItem("username")})
        .then(res => {
            console.log('response from server searchCar', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error in searchCar API");
            return error;
        });
export const getUserBookingsbydate = (date) =>
    axios.post(api + '/search/getUserBookingsbydate',{date:date})
        .then(res => {
            console.log('response from server searchCar', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error in searchCar API");
            return error;
        });
export const getUserBookingsbyMonth = (month) =>
    axios.post(api + '/search/getUserBookingsbyMonth',{month:month})
        .then(res => {
            console.log('response from server searchCar', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error in searchCar API");
            return error;
        });

export const getBookingRevenue = () =>
    axios.get(api + '/search/getBookingRevenue')
        .then(res => {
            console.log('response from server searchCar', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error in searchCar API");
            return error;
        });
export const getBookingCount = () =>
    axios.get(api + '/search/getBookingCount')
        .then(res => {
            console.log('response from server searchCar', res.data);
            return res;
        })
        .catch(error => {
            console.log("This is error in searchCar API");
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
