import {bindActionCreators} from 'redux';
import * as actionCreator from '../actions/actionCreator';
import {connect} from 'react-redux';
import Main from './Main';

function mapStateToProps(state){
    
return {
    posts:state.posts,
    comments:state.comments,
    register:state.register,
    login:state.login,
    filedetails:state.filedetails,
    groupdata:state.groupdata
}
}
function mapDispatchToProps(dispatch){
return bindActionCreators(actionCreator,dispatch);
}

const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;