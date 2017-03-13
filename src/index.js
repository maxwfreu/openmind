import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import ModalExample from './login'
import Main from './main'
import Fund from './fund'
import Create from './create'
import ArticleView from './article'
import ArticleViewContribute from './article_contribute'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/navstyle.css';


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
                <Link className="navbar-text" to="/">OpenMind</Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-left">
                    <li>
                      <Link to="/fund">
                        Read and earn
                      </Link>
                    </li>
                    <li>
                      <Link to="/create">
                         Contribute Points
                      </Link>
                    </li>

              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link> About Us </Link>
                </li>
                <li>
                <ModalExample />
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
      <Route path="fund" component={Fund} />
      <Route path="create" component={Create}/>
      <Route path="article" component={ArticleView}/>
      <Route path="article_contribute" component={ArticleViewContribute}/>
    </Route>
  </Router>
),   document.getElementById('container'))
