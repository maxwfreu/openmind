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

const SideInfo = React.createClass({
  render () {
    return (
      <div className="infoBox">
        <div className="activePoints">
          <h2> 367,063 </h2>
        </div>
          <div className="row">
          <div className="contributedBy">
            <img src={require('./images/profile-icon.png')} alt="profiles" style={{width: 30 + '%'}}/>
            <h4> + 567 Contributed </h4>
          </div>
        </div>
        <div className="row">
          <div className="readBy">
            <img src={require('./images/profile-icon-read.png')} alt="profiles" style={{width: 30 + '%'}}/>
            <h4> + 354 Read </h4>
          </div>
        </div>
        <div className="infoText">
          <h4> Read this article to earn 50 points. To recieve the points, click the “I’m done reading” button when you’ve finished. (We’ll be able to tell if you didn’t actually read it).</h4>
        </div>
      </div>
    )
  }
})

const SimilarArticles = React.createClass({
  render(){
    return (
      <div className="similarArticles">
        <h2>Similar Articles</h2>
        <SideArticle />
        <hr></hr>
      </div>
    )
  }
})

const ConsiderReading = React.createClass({
  render(){
    return (
      <div className="considerReading">
        <h2>Consider Reading</h2>
        <SideArticle />
      </div>
    )
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
        <SideInfo />
        <div className="articleList">
          <SimilarArticles />
        </div>
        <div className="consider">
          <ConsiderReading/>
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

const ArticleViewContribute = React.createClass({
  render () {
    return (
      <div className="container">
        <PageView/>
      </div>
    )
  }
})

export default ArticleViewContribute;
