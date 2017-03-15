import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import ModalExample from './login'
import Main from './main'
import Earn from './earn'
import Contribute from './contribute'
import ArticleView from './article'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/navstyle.css';

var $ = require ('jquery')

// $(document).ready(function () {
//         $('ul.nav > li').click(function (e) {
//             $('ul.nav > li').removeClass('navbar-active');
//             $('ht.title-bar').removeClass('title-active');
//             $(this).addClass('navbar-active');
//
//         });
//         $('hr.title-bar').click(function (e) {
//           console.log("hi");
//           $('ul.nav > li').removeClass('navbar-active');
//             $(this).addClass('title-active');
//         });
//     });

$(document).ready(function () {
        $('ul.read > li').click(function (e) {
                $('ul.contribute > li').removeClass('contribute-active');
                $('ht.title-bar').removeClass('title-active');
                $(this).addClass('read-active');

        });
        $('ul.contribute > li').click(function (e) {
                $('ul.read > li').removeClass('read-active');
                $('ht.title-bar').removeClass('title-active');
                $(this).addClass('contribute-active');

        });
            $('hr.title-bar').click(function (e) {
              console.log("hi");
              $('ul.nav > li').removeClass('read-active');
              $('ul.nav > li').removeClass('contribute-active');
                $(this).addClass('title-active');
            });
        });

const MyNavBar = React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="container center-logo">
                <Link className="navbar-text" to="/">
                  <img className="center-logo" width="120" src={require('./images/logo-2.png')}/>
                </Link>
              </div>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="read nav navbar-nav navbar-left">
                    <li className="read">
                      <Link className="link-text" to="/earn">
                        Read and earn
                      </Link>
                    </li>
                </ul>
                <ul className="contribute nav navbar-nav navbar-left">
                    <li className="contribute">
                      <Link className="link-text" to="/contribute">
                         Contribute Points
                      </Link>
                    </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link> About Us </Link>
                </li>
                <li>
                  <Link> My Account </Link>
                </li>
                <li className="credit-container">
                  <div>
                    <div className="ovalOverlay">
                      <div className="moneyInOval"><b>350</b></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div style={{paddingTop: 50 + 'px'}}>
          {this.props.children || <Main />}
        </div>
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={MyNavBar}>
      <Route path="earn" component={Earn} />
      <Route path="contribute" component={Contribute}/>
      <Route path="article/:uniqueKey" component={ArticleView}/>
    </Route>
  </Router>
),   document.getElementById('container'))
