import React, {Component} from 'react';
import {Bar, Line, Pie, HorizontalBar} from 'react-chartjs-2';

class HotelChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      hotelData:props.hotelData,
      novHotelBookings:props.novHotelBookings,
      hotelCompanyData:props.hotelCompanyData,
      revenueHotel:props.revenueHotel
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
                data={this.state.hotelData}
                width={70}
                height={70}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Most Popular Destinations',
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
                data={this.state.novHotelBookings}
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
                data={this.state.hotelCompanyData}
                width={70}
                height={70}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Most Popular Hotels',
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
                data={this.state.revenueHotel}
                width={70}
                height={70}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Hotel wise revenue(K) For Oct & Nov',
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

export default HotelChart;
