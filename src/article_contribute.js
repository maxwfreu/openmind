import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articleStyle.css'
import {MainArticle, SideArticle} from './article';

var $ = require ('jquery')

const SideInfo = React.createClass({
  render () {
    return (
      <div className="infoBox">
        <div className="activePoints">
          <h2> 367,063 </h2>
        </div>
          <div className="row">
          <div className="contributedBy">
            <div className="circles">
              <img className="img-circle" src={require('./images/max.jpg')} alt="max"/>
              <img className="img-circle img-next" src={require('./images/natasha.jpg')} alt="natasha"/>
              <img className="img-circle img-next" src={require('./images/pippa.jpg')} alt="pippa"/>
            </div>
                        <h4> + 567 Contributed </h4>
          </div>
        </div>
        <div className="row">
          <div className="readBy">
            <div className="circles">
              <img className="img-circle" src={require('./images/pippa.jpg')} alt="pippa"/>
              <img className="img-circle img-next" src={require('./images/natasha.jpg')}  alt="natasha"/>
              <img className="img-circle img-next" src={require('./images/max.jpg')} alt="max"/>
            </div>
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
