import React from 'react';
import {Link} from 'react-router'
import { Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/donereadingstyle.css'

const modalStyle = {
  paddingTop: 20+'%',
};

const backdropStyle = {
  zIndex: 'auto',
  width:100+'%',
  height:100+'%',
  backgroundColor: '#000',
  opacity: 0.5
};


const DoneReading = React.createClass({

  getInitialState(){
    return { showModal: false };
  },

  render() {

    return (
        <Link onClick={this.open}>
          <div className="donepopup">
          <h4 className="donepopup"> I'm Done Reading </h4>
        <Modal
          aria-labelledby='modal-label'
          style={modalStyle}
          backdropStyle={backdropStyle}
          show={this.state.showModal}
          onHide={this.close}
        >
        <Modal.Body>
          <div className="congrats">
            <h2> Awesome! It seems like you have read the article; we will put your earned credits in to your account. </h2>
            <br></br>
              <br></br>
         </div>
        </Modal.Body>
      </Modal>
      </div>
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

export default DoneReading;
