import React, {Component} from 'react';
import {Bar, Line, Pie, HorizontalBar} from 'react-chartjs-2';

class CarChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      carData:props.carData,
      novCarBookings:props.novCarBookings,
      carCompanyData:props.carCompanyData,
      revenueCarRental:props.revenueCarRental
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
                data={this.state.carData}
                width={40}
                height={40}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Most Popular Cities for revenue',
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
                data={this.state.novCarBookings}
                width={40}
                height={40}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Car Rentals in November(Number) ',
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
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
              <Pie
                data={this.state.carCompanyData}
                width={40}
                height={40}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Most Popular Car Rental Companies',
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
                data={this.state.revenueCarRental}
                width={40}
                height={40}
                options={{
                  title:{
                    display:this.props.displayTitle,
                    text:'Company wise revenue(K) for Oct & Nov',
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

export default CarChart;
