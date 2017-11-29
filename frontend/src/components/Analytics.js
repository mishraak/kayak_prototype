import React, { Component } from 'react';
//import './App.css';
import Chart from './Chart';
import CarChart from './CarChart';
import FlightChart from './FlightChart';
import HotelChart from './HotelChart';
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
            selectChart:0 //Added by Divyank
        }
    }

    componentWillMount(){
        this.getChartData();
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
                        label:'Airports',
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
                        label:'Airports',
                        data:[
                            56,
                            48,
                            40,
                            26,
                            20
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
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
                labels: ['Bellagio', 'Mandalay', 'Aria', 'Monte Carlo', 'Marriott', 'Flamingo', 'Wynn', 'Four Seasons','Trump International'],
                datasets:[
                    {
                        label:'Hot Revenue in San Jose',
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


                <button onClick={()=>this.setState({selectChart:1})} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>General chart</button>
                <button onClick={()=>this.setState({selectChart:2})} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}} >Flight chart</button>
                <button onClick={()=>this.setState({selectChart:3})} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Car chart</button>
                <button onClick={()=>this.setState({selectChart:4})} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Hotel chart</button>
                {this.state.selectChart===1?this.showGeneralChart():""}
                {this.state.selectChart===2?this.showFlightChart():""}
                {this.state.selectChart===3?this.showCarChart():""}
                {this.state.selectChart===4?this.showHotelChart():""}
            </div>
        );
    }
}

export default Analytics;