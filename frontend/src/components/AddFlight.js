import React,  {Component} from 'react'



class AddFlight extends Component{

    state = {
            airline:"Air India",
            flight_id:"abcd1",
            class_name:"Economy",
            prices:"200",
            departure:"2017-11-23 23:27:39",
            arrival:"2017-11-24 23:27:39",
            origin:"sfo",        
            destination:"delhi"
    };

    renderAddFlight() {
        if(localStorage.getItem("user_status")==0){
            return(                
                <div>                    
                    <label>Airline</label><input type="text" ref="airline" value={this.state.airline} onChange={e => this.setState({ airline: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>                    
                    <label>Flight ID</label><input type="text" ref="flight_id" value={this.state.flight_id} onChange={e => this.setState({ flight_id: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label>Class Name</label><input type="text" ref="class_name" value={this.state.class_name} onChange={e => this.setState({ class_name: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label>Price</label><input type="number" ref="prices" value={this.state.prices} onChange={e => this.setState({ prices: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label>Departure</label><input type="text" ref ="departure" value={this.state.departure} onChange={e => this.setState({ departure: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/><br/>
                    <label>Arrival</label><input type="text" ref ="arrival" value={this.state.arrival} onChange={e => this.setState({ arrival: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>                    
                    <label>Origin</label><input type="text" ref ="origin" value={this.state.origin} onChange={e => this.setState({ origin: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>   
                    <label>Destination</label><input type="text" ref ="destination" value={this.state.destination} onChange={e => this.setState({ destination: e.target.value })} style={{"height":"30px","width":"270px","margin":"10px"}}/> <br/>                             
                    <button onClick={()=>{this.props.handleAddFlight(this.state)}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Add Flight</button><br/>                                                   
                    <button onClick={()=>{this.props.route("/")}} style={{"height":"30px","margin":"10px","backgroundColor":"#ff5d11","color":"white","textAlign":"center"}}>Homepage</button>                                                   
                </div>
            )
        }
        else {
             return(                
                <div> 
                    <h1>"You are not authorized to see this page!!!"</h1>
                </div>
            );
        }
    }

	render(){
        return (                          
            <div>
                {this.renderAddFlight()}
            </div>                            
        );
	}
}

export default AddFlight;