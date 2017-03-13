import React from 'react';
import { Link } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articlecards.css';
import './style/mainstyle.css'

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const NewsCard = React.createClass({
  render () {
    return (
      <Link to="/article">
        <div className="thumbnail">
          <img src={require(this.props.url)} alt="trump"/>
          <div className="caption">
            <h4> {this.props.title} </h4>
            <p> {this.props.detail} </p>
          </div>
      </div>
    </Link>
    )
  }
})

const NewsCardBig = React.createClass({
  render () {
    return (
      <Link to="/article">
        <div className="thumbnail">
          <div className="imgContainer">
            <img src={require(this.props.url)} alt="trump" className="imgCard"/>
          </div>
          <div className="caption">
            <h4> {this.props.title} </h4>
            <p> {this.props.detail} </p>
          </div>
      </div>
    </Link>
    )
  }
})
var sideData = [{title: "North Korea Tensions Pose Early, and Perilous, Test for Trump", url:'./images/nkorea.jpg', detail: loremIpsum, colSize:"col-md-6 col-sm-6 col-xs-12"},
{title:"Dutch Fear Russian Meddling, and U.S. Cash, in Election ", url:'./images/dutch.jpg', detail: loremIpsum, colSize:"col-md-3 col-sm-3 col-xs-6"},
{title:" WikiLeaks Releases Trove of Alleged C.I.A. Hacking Documents", url:'./images/wikileaks.jpg', detail:loremIpsum, colSize:"col-md-3 col-sm-3 col-xs-6"},
{title: "Trump Abruptly Orders 46 Obama-Era Prosecutors to Resign", url:'./images/justice_master.jpg', detail: loremIpsum, colSize:"col-md-3 col-sm-4 col-xs-12"},
{title: "How Healthy Are You? G.O.P. Bill Would Help Employers Find Out", url:'./images/how_healthy.jpg', detail: loremIpsum, colSize: "col-md-6 col-sm-6 col-xs-12"},
{title: "Michael Flynn Was Paid to Represent Turkey’s Interests During Trump Campaign", url:'./images/flynn.jpg', detail: loremIpsum, colSize: "col-md-3 col-sm-6 col-xs-12"}];

const CreateRow = React.createClass({
  render (){
    var index = this.props.index;
    var items = sideData.map(function(item, i) {
      if(i < index+3 && i >= index){
        if(item.colSize ==="col-md-6 col-sm-6 col-xs-12"){
          return(
            <div className={item.colSize} key={i}>
              <NewsCardBig title={item.title} detail={item.detail} url={item.url} />
            </div>
          )
        } else {
          return(
            <div className={item.colSize} key={i}>
              <NewsCard title={item.title} detail={item.detail} url={item.url} />
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
    var rows = sideData.map(function(item, i) {
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
export const SeemlessCover = React.createClass({
  render () {
    return (
      <div className="panel-header">
        <div className="header-container">
          <div className="gradient-overlay">
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
              <img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover"/>
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
