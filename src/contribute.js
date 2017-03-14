import React from 'react';
import { Link } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articlecards.css';
import './style/mainstyle.css'
import { SeemlessCover } from './main'

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var blurb= "The House Republican plan to replace the Affordable Care Act would increase the number of people without health insurance by 24 million by 2026, while slicing $337 billion off federal budget deficits over that time, the nonpartisan Congressional Budget Office said Monday. Republicans had been bracing for what was almost certain to be a bleak accounting of the legislation’s projected effects. The American Health Care Act, as Republicans call their bill, was already facing widespread criticism from health care providers, some conservatives and a united Democratic Party."

const NewsCard = React.createClass({
  render () {
    var pathName = "/article/"+this.props.uniqueKey;
    return (
      <Link to={pathName}>
        <div className="thumbnail">
          <img src={require(this.props.url)} alt="trump"/>
          <div className="caption">
            <h4> {this.props.title} </h4>
            <p className="blurb big"> {blurb} </p>
            <div className="thumbnail-info big">
              <div className="thumbnail-credits"> <b>35,674</b> </div>
            </div>
          </div>
      </div>
    </Link>
    )
  }
})

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
            </div>
          </div>
      </div>
    </Link>
    )
  }
})
var allArticles = [{title: "Affordable Care Act revision would reduce insured numbers by 24 million, CBO projects", url:'./images/gopplan.jpg', detail: '/articleText/gopplan.txt', author: "By Amy Goldstein, Elise Viebeck, Kelsey Snell and Mike DeBonis March 13 at 7:29 PM", colSize:"col-md-6 col-sm-6 col-xs-12", uniqueKey:'10', canEarn:true},
{title:"CBO: Defunding Planned Parenthood would lead to thousands more births", url:'./images/plannedparent.jpeg', detail: '/articleText/plannedparent.txt', author: "By Sandhya Somashekhar March 13 at 10:27 PM", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'11', canEarn:true},
{title:"WikiLeaks Releases Trove of Alleged C.I.A. Hacking Documents", url:'./images/wikileaks.jpg', detail: '/articleText/wikileaks.txt', author:"By SCOTT SHANE, MATTHEW ROSENBERG and ANDREW W. LEHRENMARCH 7, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'12', canEarn:false},
{title: "Trump Abruptly Orders 46 Obama-Era Prosecutors to Resign", url:'./images/justice_master.jpg', detail: '/articleText/obamaera.txt', author:"By CHARLIE SAVAGE and MAGGIE HABERMANMARCH 10, 2017", colSize:"col-md-3 col-sm-4 col-xs-12", uniqueKey:'13', canEarn:true},
{title: "How Healthy Are You? G.O.P. Bill Would Help Employers Find Out", url:'./images/how_healthy.jpg', detail: '/articleText/howhealthy.txt', author: "By REED ABELSONMARCH 10, 2017", colSize: "col-md-6 col-sm-6 col-xs-12", uniqueKey:'14', canEarn:false},
{title: "Michael Flynn Was Paid to Represent Turkey’s Interests During Trump Campaign", url:'./images/flynn.jpg', detail: '/articleText/flynn.txt', author: "By PETER BAKER and MATTHEW ROSENBERGMARCH 10, 2017", colSize: "col-md-3 col-sm-6 col-xs-12", uniqueKey:'15', canEarn:true}];

const CreateRow = React.createClass({
  render (){
    var index = this.props.index;
    var items = allArticles.map(function(item, i) {
      if(i < index+3 && i >= index){
        if(item.colSize ==="col-md-6 col-sm-6 col-xs-12"){
          return(
            <div className={item.colSize} key={i}>
              <NewsCardBig title={item.title} detail={item.detail} uniqueKey={item.uniqueKey} url={item.url} />
            </div>
          )
        } else {
          return(
            <div className={item.colSize} key={i}>
              <NewsCard title={item.title} detail={item.detail} uniqueKey={item.uniqueKey} url={item.url} />
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

const Contribute = React.createClass({
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

export default Contribute;
