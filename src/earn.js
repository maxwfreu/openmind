import React from 'react';
import { Link } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articlecards.css';
import './style/mainstyle.css'
import { SeemlessCover } from './main'


var blurb= "The House Republican plan to replace the Affordable Care Act would increase the number of people without health insurance by 24 million by 2026, while slicing $337 billion off federal budget deficits over that time, the nonpartisan Congressional Budget Office said Monday. Republicans had been bracing for what was almost certain to be a bleak accounting of the legislation’s projected effects. The American Health Care Act, as Republicans call their bill, was already facing widespread criticism from health care providers, some conservatives and a united Democratic Party."
var allArticles = [{title: "North Korea Tensions Pose Early, and Perilous, Test for Trump", url:'./images/nkorea.jpg', detail: '/articleText/healthbill.txt', colSize:"col-md-6 col-sm-6 col-xs-12", uniqueKey:'1'},
{title:"Dutch Fear Russian Meddling, and U.S. Cash, in Election ", url:'./images/dutch.jpg', detail: '/articleText/healthbill.txt', colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'2'},
{title:" WikiLeaks Releases Trove of Alleged C.I.A. Hacking Documents", url:'./images/wikileaks.jpg', detail: '/articleText/healthbill.txt', colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'3'},
{title: "Trump Abruptly Orders 46 Obama-Era Prosecutors to Resign", url:'./images/justice_master.jpg', detail: '/articleText/healthbill.txt', colSize:"col-md-3 col-sm-4 col-xs-12", uniqueKey:'4'},
{title: "How Healthy Are You? G.O.P. Bill Would Help Employers Find Out", url:'./images/how_healthy.jpg', detail: '/articleText/healthbill.txt', colSize: "col-md-6 col-sm-6 col-xs-12", uniqueKey:'5'},
{title: "Michael Flynn Was Paid to Represent Turkey’s Interests During Trump Campaign", url:'./images/flynn.jpg', detail: '/articleText/healthbill.txt', colSize: "col-md-3 col-sm-6 col-xs-12", uniqueKey:'6'}];


function getArticleInfo(articleKey) {
  for(var i =0; i < allArticles.length; i ++){
    if(allArticles[i]['uniqueKey'] === articleKey){
      return allArticles[i];
    }
  }
}

function loadText(key, callback) {
  var article = getArticleInfo(key);
    var client = new XMLHttpRequest();
    client.open('GET', article.detail);
    client.onreadystatechange = function() {
      callback(client.responseText);
    }
    client.send();
}

const NewsCard = React.createClass({
  render () {
    var pathName = "/article/"+this.props.uniqueKey;
    return (
      <Link to={pathName}>
        <div className="thumbnail">
          <img src={require(this.props.url)} alt="trump"/>
          <div className="caption">
            <h5> {this.props.title} </h5>
            <p className="blurb"> {blurb} </p>
            <div className="thumbnail-info">
              <div className="thumbnail-credits"> <b>35,674</b> </div>
              <div className="ovalOverlay">
                <div className="moneyInOval"><b>+ 50</b></div>
              </div>
              <div className="thumbnail-readicon"> <b>Read</b> </div>            </div>
          </div>
      </div>
    </Link>
    )
  }
})

function getDetail(key){
  loadText(key, function(response){
    return response;
  });
}

const NewsCardBig = React.createClass({
  render () {
    var pathName = "/article/"+this.props.uniqueKey;
    return (
      <Link to={pathName}>
        <div className="thumbnail">
          <div className="imgContainer">
            <img src={require(this.props.url)} alt="trump" className="imgCard"/>
          </div>
          <div className="caption">
            <h4> {this.props.title} </h4>
            <p className="blurb big"> {blurb} </p>
            <div className="thumbnail-info big">
              <div className="thumbnail-credits"> <b>35,674</b> </div>
              <div className="ovalOverlay">
                <div className="moneyInOval"><b>+ 50</b></div>
              </div>
              <div className="thumbnail-readicon"> <b>Read</b> </div>            </div>
          </div>
      </div>
    </Link>
    )
  }
})

const CreateRow = React.createClass({
  render (){
    var index = this.props.index;
    var items = allArticles.map(function(item, i) {
      if(i < index+3 && i >= index){
        if(item.colSize ==="col-md-6 col-sm-6 col-xs-12"){
          return(
            <div className={item.colSize} key={i}>
              <NewsCardBig title={item.title} detail={item.detail} url={item.url} uniqueKey={item.uniqueKey} canEarn={item.canEarn}/>
            </div>
          )
        } else {
          return(
            <div className={item.colSize} key={i}>
              <NewsCard title={item.title} detail={item.detail} url={item.url} uniqueKey={item.uniqueKey} canEarn={item.canEarn}/>
            </div>
          )
        }
      }

    });
    return (<div>{items}</div>);
  }
})

const PopulateFeed = React.createClass ({
  render (){
    var rows = allArticles.map(function(item, i) {
      if(i % 3 === 0){
        return (
          <div className="row" key={i}>
            <CreateRow index={i}/>
          </div>
        )
      }
    });
    return (<div>{rows}</div>);
  }
})

const Earn = React.createClass({
  render () {
    return (
      <div>

      <SeemlessCover/>
      <hr style={{marginTop: 10 +'px'}}></hr>
      <div>
        <input type="text" placeholder="Search" className="search-bar"/>
      </div>
      <hr style={{marginBottom: 10 +'px'}}></hr>
      <div className="container">


        <PopulateFeed/>

      </div>
    </div>
    )
  }
})

export default Earn;
