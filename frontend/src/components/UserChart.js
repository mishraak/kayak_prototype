import React, {Component} from 'react';
import {Bar, Line, Pie, HorizontalBar} from 'react-chartjs-2';


class UserChart extends Component{

    componentWillMount() {


    }
    constructor(props){
        super(props);

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
                            <Bar
                                data={this.props.pageClicksData}
                                width={70}
                                height={50}
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

                    </div>

                </div>
            </div>
        )
    }
}

export default UserChart;
