import React, {Component} from 'react';
import {Bar, Line, Pie, HorizontalBar} from 'react-chartjs-2';

class FlightChart extends Component{
    constructor(props){
        super(props);
        this.state = {
          novFlightBookings:props.novFlightBookings,
          flightData:props.flightData,
          airlineCompanyData:props.airlineCompanyData,
          revenueAirline:props.revenueAirline
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right'
    }

    render(){
        return (
            <div className="chart">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-4">
                            <Bar
                                data={this.state.flightData}
                                width={70}
                                height={70}
                                options={{
                                    title:{
                                        display:this.props.displayTitle,
                                        text:'Most Popular Airports',
                                        fontSize:15
                                    },
                                    legend:{
                                        display:this.props.displayLegend,
                                        position:this.props.legendPosition
                                    }
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                            <Line
                                data={this.state.novFlightBookings}
                                width={70}
                                height={70}
                                options={{
                                    title:{
                                        display:this.props.displayTitle,
                                        text:'Tickets Sold in November(Number) ',
                                        fontSize:15
                                    },
                                    legend:{
                                        display:this.props.displayLegend,
                                        position:this.props.legendPosition
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-4">
                            <Pie
                                data={this.state.airlineCompanyData}
                                width={70}
                                height={70}
                                options={{
                                    title:{
                                        display:this.props.displayTitle,
                                        text:'Most Popular Airlines',
                                        fontSize:15
                                    },
                                    legend:{
                                        display:this.props.displayLegend,
                                        position:this.props.legendPosition
                                    }
                                }}
                            />
                        </div>
                        <div className="col-sm-4">
                          <Bar
                            data={this.state.revenueAirline}
                            width={70}
                            height={70}
                            options={{
                              title:{
                                display:this.props.displayTitle,
                                text:'Airline wise revenue(K) for Oct & Nov',
                                fontSize:15
                              },
                              legend:{
                                display:this.props.displayLegend,
                                position:this.props.legendPosition
                              }
                            }}
                          />
                        </div>
                      <div className="col-sm-2"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlightChart;
