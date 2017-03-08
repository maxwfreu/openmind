import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articleStyle.css'
var $ = require ('jquery')
const PageView = React.createClass({
  componentDidMount: function() {
    this.loadArticle();
  },
  render () {
    return (
      <div className="row">
      <div className="col-md-8">
        <h2> WikiLeaks Releases Trove of Alleged C.I.A. Hacking Documents </h2>
        <h4> This is a subtitle, wow </h4>
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
        <div id="articleContent" style={{paddingTop: 5 + 'px'}}></div>
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
},
loadArticle: function() {
  $(function() {
  $("#articleContent").load("articleText/wikiLeaks.html");
  });
  // render the buy button with jQuery
  // $.get("articleText/wikiLeaks.html", function(txt) {
  //   $('#articleContent').text(txt)
  // })
  //document.getElementById("articleContent").innerHTML='<object type="text/html" data="articleText/wikiLeaks.html" ></object>';

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
