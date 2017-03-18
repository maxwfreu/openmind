import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import ModalExample from './login'
import Main from './main'
import Earn from './earn'
import Contribute from './contribute'
import {ArticleView} from './article'
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
              $('ul.nav > li').removeClass('read-active');
              $('ul.nav > li').removeClass('contribute-active');
              $(this).addClass('title-active');
        });
        $('a.navbar-text').click(function (e) {
              $('ul.nav > li').removeClass('read-active');
              $('ul.nav > li').removeClass('contribute-active');
        });
});

const MyNavBar = React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">
                <img width="120" src={require('./images/logo-2.png')}/>
              </Link>
            </div>
            <ul className="nav navbar-nav navbar-right navbar-shift">
              <li><Link href="#"><i className="material-icons">search</i></Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Add Article</Link></li>
              <li><Link href="#">My Account</Link></li>
              <li><Link href="#">
                <div className="ovalParentOverlay">
                  <div className="ovalOverlay">
                    <div id="my-total" className="moneyInOval"> 100 </div>
                  </div>
                </div>
              </Link></li>
            </ul>
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
      <Route path="article/:uniqueKey" component={ArticleView}/>
    </Route>
  </Router>
),   document.getElementById('container'))
