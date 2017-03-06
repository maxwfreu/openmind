import React from 'react';
import {Link} from 'react-router'

import { Button, Modal} from 'react-bootstrap';

const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0, bottom: 0, left: 0, right: 0
};

const backdropStyle = {
  ...modalStyle,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.5
};

const dialogStyle = function() {
  // we use some psuedo random coords so nested modals
  // don't sit right on top of each other.
  let top = 0
  let left = 0

  return {
    position: 'absolute',
    width: 400,
    top: top + '%', left: left + '%',
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  };
};


const ModalExample = React.createClass({

  getInitialState(){
    return { showModal: false };
  },

  render() {

    return (
      <div className='modal-example'>
        <Link onClick={this.open}> Login </Link>
        <Modal
          aria-labelledby='modal-label'
          style={modalStyle}
          backdropStyle={backdropStyle}
          show={this.state.showModal}
          onHide={this.close}
        >
          <div style={dialogStyle()} >
            <h4 id='modal-label'>Login!!</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <ModalExample/>
          </div>
        </Modal>
      </div>
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
