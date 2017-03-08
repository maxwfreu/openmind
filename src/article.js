import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articleStyle.css'
var $ = require ('jquery')

var sideData = [{title: "North Korea Tensions Pose Early, and Perilous, Test for Trump", url:'./images/nkorea.jpg'}, {title:"Dutch Fear Russian Meddling, and U.S. Cash, in Election ", url:'./images/dutch.jpg'}, {title:"Trump is a madman", url:'./images/dictator.jpg'}];
//NOTE this will only be one thumbnail
const SideArticle = React.createClass({
  render (){
    var items = sideData.map(function(item, i) {
         return(
           <div className="thumbnail" key={i}>
             <img src={require(item.url)} alt="trump"/>
             <div className="caption">
               <h5> {item.title} </h5>
             </div>
           </div>
         )
    });
    return (<div>{items}</div>);
  }
})

const MainArticle = React.createClass({
  render(){
    return (
      <div>
        <h2> WikiLeaks Releases Trove of Alleged C.I.A. Hacking Documents </h2>
        <h5> By SCOTT SHANE, MATTHEW ROSENBERG and ANDREW W. LEHREN &middot; MARCH 7, 2017 </h5>
        <img src={require('./images/wikileaks.jpg')} alt="trump" style={{width: 100 + '%'}}/>
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
    )
  }
})
const PageView = React.createClass({
  componentDidMount: function() {
    this.loadArticle();
  },
  render () {
    return (
      <div className="row">
      <div className="col-md-8">
        <MainArticle />
      </div>
      <div className="col-md-4">
        <div className="articleList">
          <SideArticle />
        </div>
      </div>
    </div>
  )
},
loadArticle: function() {
  $(function() {
  $("#articleContent").load("articleText/wikiLeaks.html");
  });

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
