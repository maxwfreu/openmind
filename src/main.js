import React from 'react';
import { Link } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articlecards.css';
import './style/mainstyle.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {PopulateEarnFeed} from './earn'
import {PopulateContributeFeed} from './contribute'


var blurb= "The House Republican plan to replace the Affordable Care Act would increase the number of people without health insurance by 24 million by 2026, while slicing $337 billion off federal budget deficits over that time, the nonpartisan Congressional Budget Office said Monday. Republicans had been bracing for what was almost certain to be a bleak accounting of the legislation’s projected effects. The American Health Care Act, as Republicans call their bill, was already facing widespread criticism from health care providers, some conservatives and a united Democratic Party."
var allArticles = [{title: "Why those in media bubble never got Trump's rise – and still don't", url:'./images/trumprise.jpg',author:'Howard Kurtz', detail: '/articleText/trumprise.txt', colSize: "col-md-6 col-sm-6 col-xs-12", uniqueKey:'5', canEarn:true, points: 50, blurb: "This just in: There really is a liberal media elite that dwell in an isolated bubble. And that, in turn, causes a disconnect from reality, as we saw during the 2016 campaign and which continues during the opening weeks of the Trump presidency."},
{title:"CBO: Defunding Planned Parenthood would lead to thousands more births", url:'./images/plannedparent.jpeg', detail: '/articleText/plannedparent.txt', author: "By Sandhya Somashekhar March 13 at 10:27 PM", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'11', points: 45, canEarn:false, blurb: "A congressional plan to make Planned Parenthood ineligible for federal funding would leave many ... "},
{title:"WikiLeaks Releases Trove of Alleged C.I.A. Hacking Documents", url:'./images/wikileaks.jpg', detail: '/articleText/wikileaks.txt', author:"By SCOTT SHANE, MATTHEW ROSENBERG and ANDREW W. LEHRENMARCH 7, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'12', points: 40, canEarn:false,  blurb: "WASHINGTON — In what appears to be the largest leak of C.I.A documents in history, WikiLeaks ..."},
{title: "Trump signs executive order to make fed agencies 'lean,’ more ‘accountable'", url:'./images/dictator.jpg', detail: '/articleText/executive.txt', author:"Fox News", colSize: "col-md-3 col-sm-6 col-xs-12", uniqueKey:'6', canEarn:true,points: 40,  blurb: "President Trump on Monday ordered a top-to-bottom audit of every Executive Branch department and agency to save money and improve services."},
{title: "How Healthy Are You? G.O.P. Bill Would Help Employers Find Out", url:'./images/how_healthy.jpg', detail: '/articleText/howhealthy.txt', author: "By REED ABELSONMARCH 10, 2017", colSize: "col-md-6 col-sm-6 col-xs-12", uniqueKey:'14', canEarn:false, points: 30, blurb: "A bill in Congress could make it harder for workers to keep employers from getting access to their personal medical and genetic information and raise the financial penalties for those who opt out of workplace wellness programs."},
{title: "Michael Flynn Was Paid to Represent Turkey’s Interests During Trump Campaign", url:'./images/flynn.jpg', detail: '/articleText/flynn.txt', author: "By PETER BAKER and MATTHEW ROSENBERGMARCH 10, 2017", colSize: "col-md-3 col-sm-6 col-xs-12", uniqueKey:'15', points: 25, canEarn:false, blurb: "WASHINGTON — The candidate he was advising last fall was running ..."},
{title: "Health Bill Would Add 24 Million Uninsured but Save $337 Billion, Report Says", url:'./images/healthbill.jpg', detail: '/articleText/healthbill.txt', author: "By THOMAS KAPLAN and ROBERT PEARMARCH 13, 2017", colSize:"col-md-6 col-sm-6 col-xs-12", uniqueKey:'1', canEarn:true, points: 25, blurb: "WASHINGTON — The House Republican plan to replace the Affordable Care Act would increase the number of people without health insurance by 24 million by 2026, while slicing $337 billion off federal budget deficits over that time, the nonpartisan Congressional Budget Office said Monday."},
{title:"White House Says Trump’s Wiretap Claim Was Meant More Broadly", url:'./images/whitehouse.jpg', detail: '/articleText/whitehouse.txt', author: "By JULIE HIRSCHFELD DAVISMARCH 13, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'2', canEarn:true, points:20,  blurb: "Two senior White House officials suggested on Monday that President Trump’s unsubstantiated claim that President Barack Obama had ..."},
{title:"White House Addresses Trump’s Unorthodox Call to Preet Bharara", url:'./images/bharara.jpg', detail: '/articleText/bharara.txt', author: "By ERIC LICHTBLAU and WILLIAM K. RASHBAUMMARCH 12, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'3', canEarn:true, points: 15,  blurb: "WASHINGTON — The White House offered an explanation on Sunday for a mysterious phone call that President Trump placed to ..."},
{title: "ObamaCare repeal analysis: Millions would drop coverage, costs would fall under bill", url:'./images/obamacare.jpg', detail: '/articleText/obamacare.txt',  author:"Fox News", colSize:"col-md-3 col-sm-4 col-xs-12", uniqueKey:'4', canEarn:true, points: 15, blurb: "Congressional budget scorekeepers released their highly anticipated analysis of Republicans’ ObamaCare repeal bill late Monday, estimating millions more people would be ..."},
{title: "Affordable Care Act revision would reduce insured numbers by 24 million, CBO projects", url:'./images/gopplan.jpg', detail: '/articleText/gopplan.txt', author: "By Amy Goldstein, Elise Viebeck, Kelsey Snell and Mike DeBonis March 13 at 7:29 PM", colSize:"col-md-6 col-sm-6 col-xs-12", points: 10, uniqueKey:'10', canEarn:false, blurb: "House Republicans’ proposal to rewrite federal health-care law would more than reverse the gains the Affordable Care Act has made in the number of Americans with health insurance, while curbing the federal deficit, according to a widely anticipated forecast by congressional analysts."},
{title: "Trump Abruptly Orders 46 Obama-Era Prosecutors to Resign", url:'./images/justice_master.jpg', detail: '/articleText/obamaera.txt', author:"By CHARLIE SAVAGE and MAGGIE HABERMANMARCH 10, 2017", colSize:"col-md-3 col-sm-4 col-xs-12", uniqueKey:'13', canEarn:false, points: 10, blurb: "WASHINGTON — The Trump administration moved on Friday to sweep away most of the remaining ... "}
];

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
            <p className="blurb"> {this.props.blurb, this.props.points} </p>
            <div className="thumbnail-info">
                {generateContent(this.props.canEarn)}
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

function generateContent(canearn, points){
  if(canearn === true){
    return(
      <div>
        <div className="thumbnail-readicon can-read"> <b>Earn {points} pts</b> </div>
        <div className="thumbnail-credits read"> <b>35,674</b> </div>
      </div>
  )
} else return(
  <div>
    <div className="thumbnail-readicon can-not-read"> <b>Promote</b> </div>
    <div className="thumbnail-credits contribute"> <b>35,674</b> </div>
  </div>
);
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
              {generateContent(this.props.canEarn, this.props.points)}
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
              <NewsCardBig title={item.title} detail={item.detail} url={item.url} uniqueKey={item.uniqueKey} canEarn={item.canEarn} blurb={item.blurb} points={item.points}/>
            </div>
          )
        } else {
          return(
            <div className={item.colSize} key={i}>
              <NewsCard title={item.title} detail={item.detail} url={item.url} uniqueKey={item.uniqueKey} canEarn={item.canEarn} blurb={item.blurb} points={item.points}/>
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

export const CoverRepeat = React.createClass({
  render (){
    var images = [];
    for(var i = 0; i < 15; i ++){
      images.push(<img src={require('./images/seemless.jpg')} alt="seemless" className="seemless-cover" key={i}/>)
    }
    return (<div>{images}</div>)
  }
})

const SeemlessCover = React.createClass({
  render () {
    return (
      <div className="panel-header">
        <div className="header-container">
          <div className="gradient-overlay">
              <CoverRepeat/>
          </div>
          <div className="gradient-overlay infoi">
            <div className="info-overlay">
              <h2> How it works </h2>
              <div className="col-md-6 howItWorksRead">
                <h3> Read articles you’re not usually exposed to </h3>
                <span className="headerDropdown glyphicon glyphicon-menu-down" aria-hidden="true" ></span>
              </div>
              <div className="col-md-6 howItWorksCont">
                <h3> Promote articles you care about </h3>
                <span className="headerDropdown glyphicon glyphicon-menu-down" aria-hidden="true" ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

const CategoryTabs = React.createClass({
  render () {
    return (
      <Tabs
        onSelect={this.handleSelect}
        selectedIndex={0}
        className="category-tab-container"
      >

        {/*
          <TabList/> is a composite component and is the container for the <Tab/>s.
        */}

        <TabList className="tab-container">

          {}

          <Tab className="article-tab"><h6>Read</h6></Tab>
          <Tab className="article-tab two"><h6>Promote</h6></Tab>
          <hr className="article-underline" />

        </TabList>

        {}

        <TabPanel>
          <div className="container-fluid ">
            <PopulateEarnFeed/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container-fluid">
            <PopulateContributeFeed/>
          </div>
        </TabPanel>
      </Tabs>
    )
  }
})

const Main = React.createClass({
  render () {
    return (
      <div>

      <SeemlessCover/>
      <div className="container-fluid offset">
          <CategoryTabs />
      </div>
      <div className="filter">
        <p>Filter: <b>Top picks for you &#x25BC;</b></p>
      </div>
      <div className="add-article-button">
        <button className="btn btn-sm our-button"><b>Add An Article</b></button>
      </div>

    </div>
    )
  }
})

export default Main;
