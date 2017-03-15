import React from 'react';
import { Link } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articlecards.css';
import './style/mainstyle.css'
import { CoverRepeat } from './main'


var earnArticles = [{title: "Health Bill Would Add 24 Million Uninsured but Save $337 Billion, Report Says", url:'./images/healthbill.jpg', detail: '/articleText/healthbill.txt', author: "By THOMAS KAPLAN and ROBERT PEARMARCH 13, 2017", colSize:"col-md-6 col-sm-6 col-xs-12", uniqueKey:'1', canEarn:true, blurb: "WASHINGTON — The House Republican plan to replace the Affordable Care Act would increase the number of people without health insurance by 24 million by 2026, while slicing $337 billion off federal budget deficits over that time, the nonpartisan Congressional Budget Office said Monday."},
{title:"White House Says Trump’s Wiretap Claim Was Meant More Broadly", url:'./images/whitehouse.jpg', detail: '/articleText/whitehouse.txt', author: "By JULIE HIRSCHFELD DAVISMARCH 13, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'2', canEarn:true, blurb: "Two senior White House officials suggested on Monday that President Trump’s unsubstantiated claim that President Barack Obama had ..."},
{title:"White House Addresses Trump’s Unorthodox Call to Preet Bharara", url:'./images/bharara.jpg', detail: '/articleText/bharara.txt', author: "By ERIC LICHTBLAU and WILLIAM K. RASHBAUMMARCH 12, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'3', canEarn:true, blurb: "WASHINGTON — The White House offered an explanation on Sunday for a mysterious phone call that President Trump placed to ..."},
{title: "ObamaCare repeal analysis: Millions would drop coverage, costs would fall under bill", url:'./images/obamacare.jpg', detail: '/articleText/obamacare.txt',  author:"Fox News", colSize:"col-md-3 col-sm-4 col-xs-12", uniqueKey:'4', canEarn:true, blurb: "Congressional budget scorekeepers released their highly anticipated analysis of Republicans’ ObamaCare repeal bill late Monday, estimating millions more people would be ..."},
{title: "Why those in media bubble never got Trump's rise – and still don't", url:'./images/trumprise.jpg',author:'Howard Kurtz', detail: '/articleText/trumprise.txt', colSize: "col-md-6 col-sm-6 col-xs-12", uniqueKey:'5', canEarn:true, blurb: "This just in: There really is a liberal media elite that dwell in an isolated bubble. And that, in turn, causes a disconnect from reality, as we saw during the 2016 campaign and which continues during the opening weeks of the Trump presidency."},
{title: "Trump signs executive order to make fed agencies 'lean,’ more ‘accountable'", url:'./images/dictator.jpg', detail: '/articleText/executive.txt', author:"Fox News", colSize: "col-md-3 col-sm-6 col-xs-12", uniqueKey:'6', canEarn:true, blurb: "President Trump on Monday ordered a top-to-bottom audit of every Executive Branch department and agency to save money and improve services."}];


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
            <p className="blurb"> {this.props.blurb} </p>
            <div className="thumbnail-info">
              <div>
                <div className="thumbnail-readicon can-read"> <b>Read + 50</b> </div>
                <div className="thumbnail-credits read"> <b>35,674</b> </div>
              </div>
            </div>
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
            <p className="blurb big"> {this.props.blurb} </p>
            <div className="thumbnail-info big">
              <div>
                <div className="thumbnail-readicon can-read"> <b>Read + 50</b> </div>
                <div className="thumbnail-credits read"> <b>35,674</b> </div>
              </div>
            </div>
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
              <NewsCardBig title={item.title} detail={item.detail} url={item.url} uniqueKey={item.uniqueKey} canEarn={item.canEarn} blurb={item.blurb}/>
            </div>
          )
        } else {
          return(
            <div className={item.colSize} key={i}>
              <NewsCard title={item.title} detail={item.detail} url={item.url} uniqueKey={item.uniqueKey} canEarn={item.canEarn} blurb={item.blurb}/>
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

export const SeemlessCoverEarn = React.createClass({
  render () {
    return (
      <div className="panel-header small">
        <div className="header-container">
          <div className="gradient-overlay">
              <CoverRepeat/>
          </div>
          <div className="gradient-overlay infoi">
            <div className="info-overlay">
            <h3>Earn Credits</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

const Earn = React.createClass({
  render () {
    return (
      <div>

      <SeemlessCoverEarn/>
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
