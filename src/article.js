import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articleStyle.css'
import './style/response.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Modal } from 'react-bootstrap'
import { CoverRepeat } from './main'
import DoneReading from './doneReadingPopup'
import {SideInfo, SimilarArticles, ConsiderReading} from './sidearticles'

var $ = require ('jquery')

var sideData = [{title: "North Korea Tensions Pose Early, and Perilous, Test for Trump", url:'./images/nkorea.jpg'}, {title:"Dutch Fear Russian Meddling, and U.S. Cash, in Election ", url:'./images/dutch.jpg'}, {title:"Trump is a madman", url:'./images/dictator.jpg'}];
Tabs.setUseDefaultStyles(false);

var responseData = [{content: "This is a response", user:"John Doe"}, {content: "Wow, this sure is interesting!!!", user:"Jane Doe"}, {content: "This one time this thing happened to me that is simliar to this :D", user:"Natasha Berk"}, {content: "This one time this thing happened to me that is simliar to this :D", user:"Max Freundlich"}];
var storyData = [{content: "This is a story", user:"John Doe"},  {content: "This one time this thing happened to me that is simliar to this :D", user:"Jane Doe"}, {content: "This one time this thing happened to me that is simliar to this :D", user:"Natasha Berk"}];

var allArticles = [{title: "Why those in media bubble never got Trump's rise – and still don't", url:'./images/trumprise.jpg',author:'Howard Kurtz', detail: '/articleText/trumprise.txt', colSize: "col-md-6 col-sm-6 col-xs-12", uniqueKey:'5', canEarn:true, points: 30, totalPoints: "126,982", blurb: "This just in: There really is a liberal media elite that dwell in an isolated bubble. And that, in turn, causes a disconnect from reality, as we saw during the 2016 campaign and which continues during the opening weeks of the Trump presidency."},
{title:"CBO: Defunding Planned Parenthood would lead to thousands more births", url:'./images/plannedparent.jpeg', detail: '/articleText/plannedparent.txt', author: "By Sandhya Somashekhar March 13 at 10:27 PM", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'11', canEarn:false, totalPoints: "316,452", blurb: "A congressional plan to make Planned Parenthood ineligible for federal funding would leave many ... "},
{title:"WikiLeaks Releases Trove of Alleged C.I.A. Hacking Documents", url:'./images/wikileaks.jpg', detail: '/articleText/wikileaks.txt', author:"By SCOTT SHANE, MATTHEW ROSENBERG and ANDREW W. LEHRENMARCH 7, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'12', canEarn:false, totalPoints: "210,954", blurb: "WASHINGTON — In what appears to be the largest leak of C.I.A documents in history, WikiLeaks ..."},
{title: "Trump Abruptly Orders 46 Obama-Era Prosecutors to Resign", url:'./images/justice_master.jpg', detail: '/articleText/obamaera.txt', author:"By CHARLIE SAVAGE and MAGGIE HABERMANMARCH 10, 2017", colSize:"col-md-3 col-sm-4 col-xs-12", uniqueKey:'13', canEarn:true, totalPoints: "160,020", blurb: "WASHINGTON — The Trump administration moved on Friday to sweep away most of the remaining ... "},
{title: "How Healthy Are You? G.O.P. Bill Would Help Employers Find Out", url:'./images/how_healthy.jpg', detail: '/articleText/howhealthy.txt', author: "By REED ABELSONMARCH 10, 2017", colSize: "col-md-6 col-sm-6 col-xs-12", uniqueKey:'14', canEarn:false, totalPoints: "85,109",  blurb: "A bill in Congress could make it harder for workers to keep employers from getting access to their personal medical and genetic information and raise the financial penalties for those who opt out of workplace wellness programs."},
{title: "Michael Flynn Was Paid to Represent Turkey’s Interests During Trump Campaign", url:'./images/flynn.jpg', detail: '/articleText/flynn.txt', author: "By PETER BAKER and MATTHEW ROSENBERGMARCH 10, 2017", colSize: "col-md-3 col-sm-6 col-xs-12", uniqueKey:'15', totalPoints: "54,948",  canEarn:true, blurb: "WASHINGTON — The candidate he was advising last fall was running ..."},
{title: "Health Bill Would Add 24 Million Uninsured but Save $337 Billion, Report Says", url:'./images/healthbill.jpg', detail: '/articleText/healthbill.txt', author: "By THOMAS KAPLAN and ROBERT PEARMARCH 13, 2017", colSize:"col-md-6 col-sm-6 col-xs-12", points: 50, totalPoints: "250,560", uniqueKey:'1', canEarn:true, blurb: "WASHINGTON — The House Republican plan to replace the Affordable Care Act would increase the number of people without health insurance by 24 million by 2026, while slicing $337 billion off federal budget deficits over that time, the nonpartisan Congressional Budget Office said Monday."},
{title:"White House Says Trump’s Wiretap Claim Was Meant More Broadly", url:'./images/whitehouse.jpg', detail: '/articleText/whitehouse.txt', author: "By JULIE HIRSCHFELD DAVISMARCH 13, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'2', canEarn:true, points: 45, totalPoints: "200,010", blurb: "Two senior White House officials suggested on Monday that President Trump’s unsubstantiated claim that President Barack Obama had ..."},
{title:"White House Addresses Trump’s Unorthodox Call to Preet Bharara", url:'./images/bharara.jpg', detail: '/articleText/bharara.txt', author: "By ERIC LICHTBLAU and WILLIAM K. RASHBAUMMARCH 12, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'3', points: 45,  totalPoints: "187,431", canEarn:true, blurb: "WASHINGTON — The White House offered an explanation on Sunday for a mysterious phone call that President Trump placed to ..."},
{title: "ObamaCare repeal analysis: Millions would drop coverage, costs would fall under bill", url:'./images/obamacare.jpg', detail: '/articleText/obamacare.txt',  author:"Fox News", colSize:"col-md-3 col-sm-4 col-xs-12", uniqueKey:'4', canEarn:true, points: 35, totalPoints: "163,875", blurb: "Congressional budget scorekeepers released their highly anticipated analysis of Republicans’ ObamaCare repeal bill late Monday, estimating millions more people would be ..."},
{title: "Affordable Care Act revision would reduce insured numbers by 24 million, CBO projects", url:'./images/gopplan.jpg', detail: '/articleText/gopplan.txt', author: "By Amy Goldstein, Elise Viebeck, Kelsey Snell and Mike DeBonis March 13 at 7:29 PM", totalPoints: "410,234", colSize:"col-md-6 col-sm-6 col-xs-12", uniqueKey:'10', canEarn:false, blurb: "House Republicans’ proposal to rewrite federal health-care law would more than reverse the gains the Affordable Care Act has made in the number of Americans with health insurance, while curbing the federal deficit, according to a widely anticipated forecast by congressional analysts."},
{title: "Trump signs executive order to make fed agencies 'lean,’ more ‘accountable'", url:'./images/dictator.jpg', detail: '/articleText/executive.txt', author:"Fox News", colSize: "col-md-3 col-sm-6 col-xs-12", uniqueKey:'6', canEarn:true, points: 20, totalPoints: "97,382", blurb: "President Trump on Monday ordered a top-to-bottom audit of every Executive Branch department and agency to save money and improve services."}
];

var articleKey;
var article;

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top - 26;
    if (window_top > div_top)
        $('#sticky-element').addClass('sticky');
    else
        $('#sticky-element').removeClass('sticky');
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

function getArticleInfo() {
  for(var i =0; i < allArticles.length; i ++){
    if(allArticles[i]['uniqueKey'] === articleKey){
      return allArticles[i];
    }
  }
}

const Responses = React.createClass({
  render (){
    var items = responseData.map(function(item, i) {
         return(
           <div className="well" key={i}>
             <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </p>
             <p> - <i>{item.user}</i></p>
           </div>
         )
    });
    return (<div>{items}</div>);
  }
})

const WriteResponse = React.createClass({
  render() {
    return (
      <div className="response-container">
        <p>Did you find this artile thought-provoking? Write a response for others to read. </p>
        <h4><b><u>Add a response</u></b></h4>
      </div>
    )
  }
})

const WriteStory = React.createClass({
  render() {
    return (
      <div className="response-container">
        <p>Does this article speak to you? Do you relate to it especially well? Tell us your story. Telling story about our lives is the best way to build empathy and encourage open minded reading.</p>
        <h4><b><u>Write a Story</u></b></h4>
      </div>
    )
  }
})
const Stories = React.createClass({
  render (){
    var items = storyData.map(function(item, i) {
         return(
           <div className="well" key={i}>
             <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </p>
             <p> - <i>{item.user}</i></p>
           </div>
         )
    });
    return (<div>{items}</div>);
  }
})

function loadText(callback) {
  var article = getArticleInfo();
    var client = new XMLHttpRequest();
    client.open('GET', article.detail);
    client.onreadystatechange = function() {
      callback(client.responseText);
    }
    client.send();
}

function showDoneButton(){
  if(article.canEarn === true){
    return (<DoneReading canEarn={article.canEarn} points={article.points}/>)
  }
}

const ResponseTabs = React.createClass({
  handleSelect(index, last) {
    if(index ===0){
      loadText(function(response) {
        document.getElementById("articleContent").innerHTML = response;
      });
    }
  },
  componentDidMount(){
    loadText(function(response) {
      document.getElementById("articleContent").innerHTML = response;
    });
  },
  render () {
    return (
      <Tabs
        onSelect={this.handleSelect}
        selectedIndex={0}
      >

        {/*
          <TabList/> is a composite component and is the container for the <Tab/>s.
        */}

        <TabList className="tab-response-container">

          {}

          <Tab className="response-tab one"><h3>Article</h3></Tab>
          <Tab className="response-tab two"><h3>Stories</h3></Tab>
          <Tab className="response-tab three"><h3>Responses</h3></Tab>
          <hr className="underline" />

        </TabList>

        {}

        <TabPanel>
          <div id="articleContent" style={{paddingTop: 5 + 'px'}}></div>
          <div className="donereading-container">{showDoneButton()}</div>
        </TabPanel>
        <TabPanel>
          <WriteStory className="inner-tab-text"/>
            <Stories/>
        </TabPanel>
        <TabPanel>
            <WriteResponse className="inner-tab-text"/>
            <Responses/>

        </TabPanel>
      </Tabs>
    )
  }
})

//NOTE this will only be one thumbnail

const MainArticle = React.createClass({
  render(){
    return (
      <div className="mainArticle-text">
        <div className="article-title-info">
        <h2> {article.title} </h2>
        <div className="social-media-container">
          <h5 className="social-media"> By SCOTT SHANE, MATTHEW ROSENBERG and ANDREW W. LEHREN &middot; MARCH 7, 2017 </h5>
            <i className="fa fa-share social-media icon" aria-hidden="true"></i>
              <i className="fa fa-envelope social-media icon" aria-hidden="true"></i>
            <i className="fa fa-twitter-square social-media icon" aria-hidden="true"></i>
            <i className="fa fa-facebook-square social-media icon" aria-hidden="true"></i>
      </div>
        <img src={require(article.url)} alt="trump" style={{width: 100 + '%'}}/>
        <p className="article-caption">{article.blurb}</p>
        </div>
      <ResponseTabs/>
      </div>
    )
  }
})

const PageView = React.createClass({
  render () {
    return (
      <div className="row">
      <div className="col-md-8">
        <MainArticle />
      </div>
      <div className="col-md-4">
        <div className="container-fluid">
          <div id="sticky-anchor"></div>
          <div id="sticky-element" className="articleList">
            <SideInfo canEarn={article.canEarn} points={article.points} totalPoints={article.totalPoints}/>
            <SimilarArticles/>
            <hr style={{height:3+'px'}}/>
            <ConsiderReading/>
          </div>
        </div>
      </div>
    </div>
  )
}
})

const SeemlessCoverArticle = React.createClass({
  render () {
    return (
      <div className="panel-header small">
        <div className="header-container">
          <div className="gradient-overlay small">
              <CoverRepeat/>
          </div>
          <div className="gradient-overlay infoi">
            <div className="info-overlay">
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export const ArticleView = React.createClass({
  render () {
    // $(document).ready(function () {
    //        window.scrollTo(0,0);
    //    });
    articleKey = this.props.params.uniqueKey;
    article = getArticleInfo();
    return (
      <div>
        <SeemlessCoverArticle/>
        <div className="container-fluid">
          <PageView/>
        </div>

      </div>

    )
  }
})
