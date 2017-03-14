import React from 'react';
import { Link } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articlecards.css';
import './style/mainstyle.css'

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
            <h4> {this.props.title} </h4>
            <p className="blurb"> {blurb} </p>
            <div className="thumbnail-info">
              <div className="thumbnail-credits"> 35,674 </div>
              <div className="thumbnail-readicon"> Read</div>
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
            <p className="blurb big"> {blurb} </p>
            <div className="thumbnail-info">
              <div className="thumbnail-credits"> 35,674 </div>
              <div className="thumbnail-readicon"> Read</div>
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
    var items = allArticles.map(function(item, i) {
      if(i < index+3 && i >= index){
        if(item.colSize ==="col-md-6 col-sm-6 col-xs-12"){
          return(
            <div className={item.colSize} key={i}>
              <NewsCardBig title={item.title} detail={item.detail} url={item.url} uniqueKey={item.uniqueKey}/>
            </div>
          )
        } else {
          return(
            <div className={item.colSize} key={i}>
              <NewsCard title={item.title} detail={item.detail} url={item.url} uniqueKey={item.uniqueKey} />
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

const CoverRepeat = React.createClass({
  render (){
    var images = [];
    for(var i = 0; i < 15; i ++){
      images.push(<img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover" key={i}/>)
    }
    return (<div>{images}</div>)
  }
})

export const SeemlessCover = React.createClass({
  render () {
    return (
      <div className="panel-header">
        <div className="header-container">
          <div className="gradient-overlay">
              <CoverRepeat/>
          </div>
          <div className="gradient-overlay infoi">
            <div className="info-overlay">
            <h3>Our Cool Title</h3>
            <h4>How it works</h4>
              <div className="row">
                <div className="col-md-6">
                  Read: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
                </div>
                <div className="col-md-6">
                  Contribute: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
const Main = React.createClass({
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

export default Main;
