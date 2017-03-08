import React from 'react';
import { Link } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articlecards.css';

const NewsCard = React.createClass({
  render () {
    return (
      <Link to="/article">
        <div className="box">

        <div className="thumbnail">
          <div className="ovalParentOverlay">
            <div className="ovalOverlay"><div className="moneyInOval"> 7 $ </div></div>
          </div>
          <img src={require('./images/dictator.jpg')} alt="trump"/>
          <div className="caption">
            <h3> Article About Trump </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
    </div>
  </Link>
    )
  }
})

const NewsCardBig = React.createClass({
  render () {
    return (
      <Link to="/article">
        <div className="box">
        <div className="thumbnail">
          <div className="ovalParentOverlay">
            <div className="ovalOverlay"><div className="moneyInOval"> 7 $ </div></div>
          </div>
          <img src={require('./images/dictator.jpg')} alt="trump"/>
          <div className="caption">
            <h3> Article About Trump </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
          </div>
        </div>
      </div>
    </Link>
    )
  }
})

const Main = React.createClass({
  render () {
    return (
      <div className="container">

        <div className="panel panel-default">
          <div className="panel-body">
            How it Works
          </div>
        </div>

        <div className="row is-flex">
          <div className="col-md-6"><NewsCardBig /></div>
            <div className="col-md-3"><NewsCardBig /></div>
              <div className="col-md-3"><NewsCardBig /></div>
                <div className="col-md-3"><NewsCardBig /></div>
                  <div className="col-md-6"><NewsCardBig /></div>
                    <div className="col-md-3"><NewsCardBig /></div>

        </div>
      </div>
    )
  }
})

export default Main;
