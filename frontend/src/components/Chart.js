import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartBookingData:props.chartBookingData,
      chartRevenueDataData:props.chartRevenueDataData
    }
  }
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
  };
  render(){
    return (
      <div className="chart">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Doughnut
                data={this.state.chartBookingData}
                width={70}
                height={50}
                options={{
                  title:{display:this.props.displayTitle,
                  text:'Different Types of Bookings(%)',
                  fontSize:20},
                  legend:{display:this.props.displayLegend,
                  position:this.props.legendPosition}}}
              />
            </div>
            <div className="col-lg-6">
              <Doughnut
                data={this.state.chartRevenueDataData}
                width={70}
                height={50}
                options={{
                  title:{display:this.props.displayTitle,
                  text:'Revenue From Different Booking Types(%)',
                  fontSize:20},
                  legend:{display:this.props.displayLegend,
                  position:this.props.legendPosition}}}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Chart;