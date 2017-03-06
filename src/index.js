import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import ModalExample from './login'

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
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    )
  }
})

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

const Fund = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Create = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={MyNavBar}>
      <Route path="fund" component={Fund} />
      <Route path="create" component={Create}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
),   document.getElementById('container'))
