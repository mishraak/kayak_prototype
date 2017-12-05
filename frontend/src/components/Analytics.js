import React, { Component } from 'react';
//import './App.css';
import Chart from './Chart';
import CarChart from './CarChart';
import FlightChart from './FlightChart';
import HotelChart from './HotelChart';
import UserChart from './UserChart';
import * as API from '../api/API';

import Nav from './Nav';

class Analytics extends Component {
    constructor(){
        super();
        this.state = {
            chartBookingData:{},
            chartRevenueData:{},
            flightData:{},
            novFlightBookings:{},
            airlineCompanyData:{},
            revenueAirline:{},
            carData:{},
            novCarBookings:{},
            carCompanyData:{},
            revenueCarRental:{},
            hotelData:{},
            novHotelBookings:{},
            hotelCompanyData:{},
            revenueHotel:{},
            selectChart:0 ,//Added by Divyank
            pageClicksData:{},
            userActivity:{}
        }
    }

    componentWillMount(){
        this.getChartData();
        this.getPageClicks();
        this.getUserActivity();
        this.getMostPopularAirlines();
        this.getMostPopularAirports();
        this.getBookingRevenue();
        this.getBookingCount();
    }

    getUserActivity(){
        var linkedList=JSON.parse(localStorage.getItem("trackUser"));
        var labels=[];
        var data=[];
        while(linkedList!==null){
            labels.push(linkedList.data.pageName);
            data.push(linkedList.data.timeSpent);
            linkedList=linkedList.next;
        }
        this.setState({
            // The Main Chart Data Goes here.
            userActivity: {
                labels: labels,
                datasets: [
                    {
                        label: 'Time spent',
                        data: data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        })

    }

    getBookingRevenue(){
        var labels=[];
        var data=[];
        API.getBookingRevenue()
            .then(res => {
                res.data.map((val)=> {
                    labels.push(val.booking_type);
                    data.push(val.sum);
                });
            })
            .then(
                this.setState({
                    // The Main Chart Data Goes here.
                    chartRevenueDataData: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Page clicks',
                                data: data,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)'
                                ]
                            }
                        ]
                    }
                })

            );
    }
    getBookingCount(){
        var labels=[];
        var data=[];
        API.getBookingCount()
            .then(res => {
                res.data.map((val)=> {
                    labels.push(val.booking_type);
                    data.push(val.count);
                });
            })
            .then(
                this.setState({
                    // The Main Chart Data Goes here.
                    chartBookingData: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Page clicks',
                                data: data,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)'
                                ]
                            }
                        ]
                    }
                })

            );
    }

    getMostPopularAirports(){
        var labels=[];
        var data=[];
        API.getMostPopularAirports()
            .then(res => {
                res.data.map((val)=> {
                    labels.push(val._id);
                    data.push(val.count);
                });
            })
            .then(
                this.setState({
                    // The Main Chart Data Goes here.
                    flightData: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Airports',
                                data: data,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)'
                                ]
                            }
                        ]
                    }
                })

            );
    }

    getMostPopularAirlines(){
        var labels=[];
        var data=[];
        API.getMostPopularAirlines()
            .then(res => {
                res.data.map((val)=> {
                    labels.push(val._id);
                    data.push(val.count);
                });
            })
            .then(
                this.setState({
                    // The Main Chart Data Goes here.
                    airlineCompanyData: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Page clicks',
                                data: data,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)'
                                ]
                            }
                        ]
                    }
                })

            );
    }

    getPageClicks(){
        var labels=[];
        var data=[];
        API.getPageClicks()
            .then(res => {
                res.data.map((val)=> {
                    labels.push(val.page);
                    data.push(val.clicks);
                });
            })
            .then(
                this.setState({
                    // The Main Chart Data Goes here.
                    pageClicksData: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Page clicks',
                                data: data,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)'
                                ]
                            }
                        ]
                    }
                })

            );
    }

    getChartData(){
        // Ajax calls here
        this.setState({
            // The Main Chart Data Goes here.
            chartBookingData:{
                labels: ['Flights', 'Hotels', 'Cars'],
                datasets:[
                    {
                        label:'Population',
                        data:[
                            21,
                            44,
                            35
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)'
                        ]
                    }
                ]
            },

            chartRevenueDataData:{
                labels: ['Flights', 'Hotels', 'Cars'],
                datasets:[
                    {
                        label:'Population',
                        data:[
                            62,
                            26,
                            12
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)'
                        ]
                    }
                ]
            },

            // Data for flight Analytics is here

            flightData:{
                labels: ['SFO', 'LHR', 'DXB', 'BOM', 'LAX', 'DEL', 'NYC', 'ABD','SJC', 'ORD'],
                datasets:[
                    {
                        label:'Airports',
                        data:[
                            190,
                            166,
                            144,
                            123,
                            112,
                            90,
                            70,
                            59,
                            46,
                            40,

                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 192, 64, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 55, 0.6)',
                            'rgba(255, 192, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            },

            novFlightBookings:{
                labels: ['5', '10', '15', '20', '25', '30'],
                datasets:[
                    {
                        label:'Days in November',
                        data:[
                            156,
                            92,
                            123,
                            77,
                            190,
                            90
                        ],
                        backgroundColor:[
                            'rgba(153, 102, 255, 0.6)',
                        ]
                    }
                ]
            },

            airlineCompanyData:{
                labels: ['Air India', 'United', 'Delta', 'Ethihad', 'SouthWest', 'Emirates', 'Air China', 'British','Lufthansa'],
                datasets:[
                    {
                        label:'Airlines',
                        data:[
                            720,
                            608,
                            598,
                            592,
                            488,
                            426,
                            364,
                            325,
                            250,
                            120
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 192, 64, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 55, 0.6)',
                            'rgba(255, 192, 64, 0.6)',
                            'rgba(255, 192, 64, 0.6)',
                            'rgba(123, 192, 64, 0.6)'
                        ]
                    }
                ]
            },

            revenueAirline:{
                labels: ['Air India', 'United', 'Delta', 'Ethihad', 'SouthWest', 'Emirates', 'Air China', 'British','Lufthansa'],
                datasets:[
                    {
                        label:'October',
                        data:[
                            190,
                            156,
                            142,
                            123,
                            90,
                            77,
                            50,
                            40,
                            30,
                            40,

                        ],
                        backgroundColor:'#EC932F',
                    },
                    {
                      label:'November',
                      data:[
                        140,
                        157,
                        132,
                        130,
                        77,
                        60,
                        40,
                        30,
                        20,
                        20,
      
                      ],
                      backgroundColor:'#71B37C',
                    }
                ]
            },


            // Car Analytics Data

            carData:{
                labels: ['Los Angeles', ' Vegas', 'Orlando', 'Seattle', 'NYC', 'Dallas', 'SF', 'Miami','Denver', 'San Jose'],
                datasets:[
                    {
                        label:'Cities',
                        data:[
                            58,
                            53,
                            46,
                            40,
                            37,
                            32,
                            28,
                            24,
                            20,
                            17,
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 192, 64, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 55, 0.6)',
                            'rgba(255, 192, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            },

            novCarBookings:{
                labels: ['5', '10', '15', '20', '25', '30'],
                datasets:[
                    {
                        label:'Days in November',
                        data:[
                            199,
                            252,
                            191,
                            160,
                            303,
                            100
                        ],
                        backgroundColor:[
                            'rgba(153, 102, 255, 0.6)',
                        ]
                    }
                ]
            },

            carCompanyData:{
                labels: ['Enterprise', 'Hertz', 'National', 'Avis', 'Budget'],
                datasets:[
                    {
                        label:'Rental Company',
                        data:[
                            1346,
                            1008,
                            870,
                            692,
                            320
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(123, 192, 64, 0.6)'
                        ]
                    }
                ]
            },

            revenueCarRental:{
                labels: ['Enterprise', 'Hertz', 'National', 'Avis', 'Budget'],
                datasets:[
                    {
                        label:'October',
                        data:[
                            56,
                            48,
                            40,
                            26,
                            20
                        ],
                        backgroundColor:'#EC932F'
                    },
                    {
                      label:'November',
                      data:[
                        45,
                        40,
                        41,
                        12,
                        14
                      ],
                      backgroundColor:'#71B37C'
                    }
                ]
            },

            // Hotel Analytics Data

            hotelData:{
                labels: ['Los Angeles', 'Las Vegas', 'Miami', 'Lake Tahoe', 'New York', 'Chicago', 'San Diego', 'Maui','Seattle', 'Portland'],
                datasets:[
                    {
                        label:'Cities',
                        data:[
                            58,
                            53,
                            46,
                            40,
                            37,
                            32,
                            28,
                            24,
                            20,
                            17,
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 192, 64, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 55, 0.6)',
                            'rgba(255, 192, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            },

            novHotelBookings:{
                labels: ['5', '10', '15', '20', '25', '30'],
                datasets:[
                    {
                        label:'Days in November',
                        data:[
                            104,
                            245,
                            162,
                            120,
                            220,
                            100
                        ],
                        backgroundColor:[
                            'rgba(153, 102, 255, 0.6)',
                        ]
                    }
                ]
            },

            hotelCompanyData:{
                labels: ['Bellagio', 'Mandalay', 'Aria', 'Monte Carlo', 'Marriott', 'Flamingo', 'Wynn', 'Vdara','Trump','Holiday'],
                datasets:[
                    {
                        label:'Popular Hotels in LA',
                        data:[
                            720,
                            608,
                            598,
                            592,
                            488,
                            426,
                            364,
                            325,
                            250,
                            120
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 192, 64, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 55, 0.6)',
                            'rgba(255, 192, 64, 0.6)',
                            'rgba(255, 192, 64, 0.6)',
                            'rgba(123, 192, 64, 0.6)'
                        ]
                    }
                ]
            },

            revenueHotel:{
                labels: ['Bellagio', 'Mandalay', 'Aria', 'Monte Carlo', 'Marriott', 'Flamingo', 'Wynn', 'Four Seasons','Trump'],
                datasets:[
                    {
                        label:'October',
                        data:[
                            190,
                            156,
                            142,
                            123,
                            77,
                            90,
                            50,
                            40,
                            30,
                            40,
                        ],
                        backgroundColor:'#EC932F'
                    },
                    {
                      label:'November',
                      data:[
                        240,
                        216,
                        222,
                        143,
                        120,
                        130,
                        100,
                        80,
                        60,
                        50,
                      ],
                      backgroundColor:'#71B37C'
                    }
                ]
            },

        });
    }

    showGeneralChart(){
        return(
            <div>
                <Chart  chartBookingData={this.state.chartBookingData}
                        chartRevenueDataData={this.state.chartRevenueDataData}
                        legendPosition="bottom"/>

            </div>
        )

    }
    showFlightChart(){
        return(
            <div>
                <FlightChart novFlightBookings={this.state.novFlightBookings}
                             flightData={this.state.flightData}
                             airlineCompanyData={this.state.airlineCompanyData}
                             revenueAirline={this.state.revenueAirline}
                             legendPosition="bottom"/>

            </div>
        )
    }
    showCarChart(){
        return(
            <div>
                <CarChart carData={this.state.carData}
                          novCarBookings={this.state.novCarBookings}
                          carCompanyData={this.state.carCompanyData}
                          revenueCarRental={this.state.revenueCarRental}
                          legendPosition="bottom"/>

            </div>
        )
    }
    showHotelChart(){
        return(
            <div>
                <HotelChart hotelData={this.state.hotelData}
                            novHotelBookings={this.state.novHotelBookings}
                            hotelCompanyData={this.state.hotelCompanyData}
                            revenueHotel={this.state.revenueHotel}
                            legendPosition="bottom"/>

            </div>
        )
    }
    showUserChart(){
        return(
            <div>
                <UserChart pageClicksData={this.state.pageClicksData} userTracking={this.state.userActivity}/>
            </div>
        )
    }



    render() {
        return (
            <div className="App">
                <div>

                    <nav className="navbar" style={{"textShadow":"none","fontSize":"13px","color":"white"}}>
                        <div className="container-fluid" style={{"backgroundColor":"none"}}>
                            <div className="navbar-header">
                                <img src={require("../images/logo.png")} alt="Logo" style={{"marginTop":"10px"}}/>
                            </div>
                            <ul className="nav navbar-nav" style={{"backgroundColor":"none"}}>
                                <li className="active"><a href="#" style={{"color":"white"}}>Flights</a></li>
                                <li ><a href="#" style={{"color":"white"}}>Hotels</a></li>
                                <li  className="nav-item" ><a href="#" style={{"color":"white"}}>Cars</a></li>
                                <li>

                                </li>
                            </ul>

                        </div>
                    </nav>

                    <hr style={{"opacity":"100%","width":"1000px"}}/>
                </div>

                <button onClick={()=>this.setState({selectChart:5})} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>User chart</button>
                <button onClick={()=>this.setState({selectChart:1})} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>General chart</button>
                <button onClick={()=>this.setState({selectChart:2})} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}} >Flight chart</button>
                <button onClick={()=>this.setState({selectChart:3})} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Car chart</button>
                <button onClick={()=>this.setState({selectChart:4})} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Hotel chart</button>
                {this.state.selectChart===1?this.showGeneralChart():""}
                {this.state.selectChart===2?this.showFlightChart():""}
                {this.state.selectChart===3?this.showCarChart():""}
                {this.state.selectChart===4?this.showHotelChart():""}
                {this.state.selectChart===5?this.showUserChart():""}
            </div>
        );
    }
}

export default Analytics;