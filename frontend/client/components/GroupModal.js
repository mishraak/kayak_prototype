import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import localstorage from 'local-storage';
import axios from 'axios';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height: '600px',
    width:'600px'

  }
};

class GroupModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  handleSubmit(e){
    e.preventDefault();
    //console.log(this.refs.grp_name.value);
    console.log('atleast i was called');
   
    var permission = this.refs.permission.value;
    console.log(permission);
   
    var email = this.refs.useremail.value;
    console.log(email);

    var groupname= this.props.groupname;

  
   
    
    
  axios.post('http://localhost:8080/routes/grouprawdata',{grp_name:this.props.groupname,email:email,permission:permission}).then
   ((res)=>{
       console.log('response//to be deleted');
       console.log(res);
      // this.props.getGroups(res.data);
   });
   
   
   //an alternative to this as the action is independant
  
}

  render() {
    return (
      <div>
        <div onClick={this.openModal}>{this.props.groupname}</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

        
          <div onClick={this.closeModal}>X</div>
          <div>{this.props.groupname}</div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" ref="useremail" name="useremail" placeholder="Add Users" />
            <select ref="permission" name="permission">
               <option>Choose Permission level...</option>
                <option>Read </option>
                <option>Write </option>
                <option>Admin</option>
            </select>
            <input className="btn btn-primary" type="submit" value="Add User"/>
          </form>
            <div>
             This is the area where we display the list of users
            </div>
        </Modal>
      </div>
    );
  }
}

export default GroupModal;
