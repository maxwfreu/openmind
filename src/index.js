import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import ModalExample from './login'
import Main from './main'
import Fund from './fund'
import Create from './create'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const MyNavBar = React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
                <Link className="navbar-brand" to="/">OpenMind</Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/fund">
                        <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                        Fund
                      </Link>
                    </li>
                    <li>
                      <Link to="/create">
                        <span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                         Create
                      </Link>
                    </li>
                    <li>
                    <ModalExample />
                    </li>
              </ul>
            </div>
          </div>
        </nav>
        <div style={{paddingTop: 80 + 'px'}}>
          {this.props.children || <Main />}
        </div>
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={MyNavBar}>
      <Route path="fund" component={Fund} />
      <Route path="create" component={Create}/>
    </Route>
  </Router>
),   document.getElementById('container'))
