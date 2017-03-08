import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articleStyle.css'

const PageView = React.createClass({
  render () {
    return (
      <div className="row">

      <div className="col-md-8">
        <h2> Cool Title </h2>
        <h5> This is a sub title </h5>
        <img src={require('./images/dictator.jpg')} alt="trump" style={{width: 100 + '%'}}/>
        <div className="infoContainer">
          <div className="ovalViewOverlay"><div className="moneyInOvalView"> 7 $</div></div>
          <i className="material-icons icon" style={{fontSize:36 + 'px'}}>people</i>
          <div className="centered"> 508 Readers</div>
          <i className="material-icons icon" style={{fontSize:34+'px'}}>star_rate</i>
          <div className="centered"> 10,003 Credits Raised</div>
        </div>
        <div className="share">
          <button type="button" className="btn btn-default btn-sm">
            <span className="glyphicon glyphicon-share-alt"></span> Share
          </button>
        </div>
        <p style={{paddingTop: 5 + 'px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        ariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="col-md-4">
        <div style={{paddingTop:40 +'px'}}>
          <h3> Some Other Article</h3>
          <h3> Some Other Article</h3>
          <h3> Some Other Article</h3>
          <h3> Some Other Article</h3>
        </div>
      </div>
    </div>

    )
  }
})

const ArticleView = React.createClass({
  render () {
    return (
      <div className="container">
        <PageView/>
      </div>
    )
  }
})

export default ArticleView;
