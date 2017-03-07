import React from 'react';
import {Link} from 'react-router'
import { Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const modalStyle = {
  paddingTop: 30+'%',
};

const backdropStyle = {
  zIndex: 'auto',
  width:100+'%',
  height:100+'%',
  backgroundColor: '#000',
  opacity: 0.5
};

const emailStyle ={
  width: 80 + '%',
  marginBottom: -1.0 +'px',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0
};

const passwordStyle ={
  width: 80 + '%',

  marginBottom: 20.0 +'px',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0
};

const ModalExample = React.createClass({

  getInitialState(){
    return { showModal: false };
  },

  render() {

    return (
        <Link onClick={this.open}> Login
        <Modal
          aria-labelledby='modal-label'
          style={modalStyle}
          backdropStyle={backdropStyle}
          show={this.state.showModal}
          onHide={this.close}
        >
        <Modal.Body>
           <div className="form-group" style={emailStyle}>
             <input type="email" className="form-control" id="email" placeholder="Email"/>
           </div>
           <div className="form-group" style={passwordStyle}>
             <input type="password" className="form-control" id="pwd" placeholder="password"/>
           </div>
           <div className="checkbox">
             <label><input type="checkbox" value="remember" />Remember me</label>
           </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </Modal.Body>
      </Modal>

        </Link>
    );
  },

  close(){
    this.setState({ showModal: false });
  },

  open(){
    this.setState({ showModal: true });
  }
});

export default ModalExample;
