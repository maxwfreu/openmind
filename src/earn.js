import React from 'react';
import { Link } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articlecards.css';
import './style/mainstyle.css'
import { SeemlessCover } from './main'


var blurb= "The House Republican plan to replace the Affordable Care Act would increase the number of people without health insurance by 24 million by 2026, while slicing $337 billion off federal budget deficits over that time, the nonpartisan Congressional Budget Office said Monday. Republicans had been bracing for what was almost certain to be a bleak accounting of the legislation’s projected effects. The American Health Care Act, as Republicans call their bill, was already facing widespread criticism from health care providers, some conservatives and a united Democratic Party."
var earnArticles = [{title: "Health Bill Would Add 24 Million Uninsured but Save $337 Billion, Report Says", url:'./images/healthbill.jpg', detail: '/articleText/healthbill.txt', author: "By THOMAS KAPLAN and ROBERT PEARMARCH 13, 2017", colSize:"col-md-6 col-sm-6 col-xs-12", uniqueKey:'1'},
{title:"White House Says Trump’s Wiretap Claim Was Meant More Broadly", url:'./images/whitehouse.jpg', detail: '/articleText/whitehouse.txt', author: "By JULIE HIRSCHFELD DAVISMARCH 13, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'2'},
{title:"White House Addresses Trump’s Unorthodox Call to Preet Bharara", url:'./images/bharara.jpg', detail: '/articleText/bharara.txt', author: "By ERIC LICHTBLAU and WILLIAM K. RASHBAUMMARCH 12, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'3'},
{title: "ObamaCare repeal analysis: Millions would drop coverage, costs would fall under bill", url:'./images/obamacare.jpg', detail: '/articleText/obamacare.txt',  author:"Fox News", colSize:"col-md-3 col-sm-4 col-xs-12", uniqueKey:'4'},
{title: "Why those in media bubble never got Trump's rise – and still don't", url:'./images/trumprise.jpg',author:'Howard Kurtz', detail: '/articleText/trumprise.txt', colSize: "col-md-6 col-sm-6 col-xs-12", uniqueKey:'5'},
{title: "Trump signs executive order to make fed agencies 'lean,’ more ‘accountable'", url:'./images/dictator.jpg', detail: '/articleText/executive.txt', author:"Fox News", colSize: "col-md-3 col-sm-6 col-xs-12", uniqueKey:'6'}];


function getArticleInfo(articleKey) {
  for(var i =0; i < earnArticles.length; i ++){
    if(earnArticles[i]['uniqueKey'] === articleKey){
      return earnArticles[i];
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
    var items = earnArticles.map(function(item, i) {
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
    var rows = earnArticles.map(function(item, i) {
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
