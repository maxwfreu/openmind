import React from 'react';
import { Link } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const NewsCard = React.createClass({
  render () {
    return (
      <div className="col-xs-6 col-md-4">
        <div className="w3-card-12">
          <img src={require('./images/dictator.jpg')} alt="trump" style={{width: 100 + '%'}}/>
          <div className="w3-container w3-center">
            <p style={{paddingTop: 5 + 'px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
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

        <div className="row">
          <Link to="/article"><NewsCard /></Link>
          <Link to="/article"><NewsCard /></Link>
          <Link to="/article"><NewsCard /></Link>
        </div>
      </div>
    )
  }
})

export default Main;
