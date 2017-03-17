import React from 'react';
import {Link} from 'react-router'
import { Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/promoteBtnStyle.css'
require('rc-slider/assets/index.css');
require('rc-tooltip/assets/bootstrap.css');
import Tooltip from 'rc-tooltip'
import Slider from 'rc-slider'
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <div>
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle {...restProps} />
    </Tooltip>
    <div>{value}</div>
    </div>
  );
};

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
const wrapperStyle = { width: 400, margin: 50, zindex:10000 };

function generateModalBody(canearn){
  if(canearn === true){
    return(
      <div className="congrats">
      <h2> Congrats!</h2>
      <h4> You earned <b>50</b> credits for reading this article!</h4>
      <p> Post your opinion in the responses section or share a story in the stories section</p>
      <br></br>
        <br></br>
      </div>)
  } else {
    return(
    <div>

    <div className="congrats">
      <h2> Would you like to promote this article?</h2>
      <h4> You currently have <b>100</b> points. How many would you like to put towards this article? </h4>
        <Slider min={0} max={100} defaultValue={10} handle={handle}/>
      <br></br>
        <br></br>
   </div>
   <div>
</div>
 </div>
  );
}
}

function generateButtonName(canearn){
  if(canearn === true){
    return 'OK';
  } else {
    return 'Promote';
  }
}

const PromotePopup = React.createClass({

  getInitialState(){
    return { showModal: false };
  },

  close_up(){
    //this.setState({ showModal: false });
  },

  open(){
    this.setState({ showModal: true });
  },

  render() {

    return (
        <Link onClick={this.open}>
          <div className="promote-button">
            <button className="btn donepopup"> <b>Promote Article </b></button>
            <p className="article-promotion-points"> {this.props.points} pts</p>
            <Modal
              aria-labelledby='modal-label'
              style={modalStyle}
              backdropStyle={backdropStyle}
              show={this.state.showModal}
              onHide={this.close}>
              <Modal.Body>
                {generateModalBody(this.props.canEarn)}
                <div className="end-button-container">
                  <button type="button" className="btn btn-sm btn-outline ok-button pull-right" onClick={this.close}>{generateButtonName(this.props.canEarn)}</button>
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

export default PromotePopup;
