import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articleStyle.css'
import './style/response.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Modal } from 'react-bootstrap'
import { SeemlessCover } from './main'
import DoneReading from './doneReadingPopup'
import {SideInfo, SimilarArticles, ConsiderReading} from './sidearticles'

var $ = require ('jquery')

var sideData = [{title: "North Korea Tensions Pose Early, and Perilous, Test for Trump", url:'./images/nkorea.jpg'}, {title:"Dutch Fear Russian Meddling, and U.S. Cash, in Election ", url:'./images/dutch.jpg'}, {title:"Trump is a madman", url:'./images/dictator.jpg'}];
Tabs.setUseDefaultStyles(false);

var responseData = [{content: "This is a response", user:"John Doe"}, {content: "Wow, this sure is interesting!!!", user:"Jane Doe"}];
var storyData = [{content: "This is a story", user:"John Doe"},  {content: "This one time this thing happened to me that is simliar to this :D", user:"Jane Doe"}];

var allArticles = [{title: "Health Bill Would Add 24 Million Uninsured but Save $337 Billion, Report Says", url:'./images/healthbill.jpg', detail: '/articleText/healthbill.txt', author: "By THOMAS KAPLAN and ROBERT PEARMARCH 13, 2017", colSize:"col-md-6 col-sm-6 col-xs-12", uniqueKey:'1'},
{title: "White House Says Trump’s Wiretap Claim Was Meant More Broadly", url:'./images/whitehouse.jpg', detail: '/articleText/whitehouse.txt', author: "By JULIE HIRSCHFELD DAVISMARCH 13, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'2'},
{title: "White House Addresses Trump’s Unorthodox Call to Preet Bharara", url:'./images/bharara.jpg', detail: '/articleText/bharara.txt', author: "By ERIC LICHTBLAU and WILLIAM K. RASHBAUMMARCH 12, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'3'},
{title: "ObamaCare repeal analysis: Millions would drop coverage, costs would fall under bill", url:'./images/obamacare.jpg', detail: '/articleText/obamacare.txt',  author:"Fox News", colSize:"col-md-3 col-sm-4 col-xs-12", uniqueKey:'4'},
{title: "Why those in media bubble never got Trump's rise – and still don't", url:'./images/trumprise.jpg',author:'Howard Kurtz', detail: '/articleText/trumprise.txt', colSize: "col-md-6 col-sm-6 col-xs-12", uniqueKey:'5'},
{title: "Trump signs executive order to make fed agencies 'lean,’ more ‘accountable'", url:'./images/dictator.jpg', detail: '/articleText/executive.txt', author:"Fox News", colSize: "col-md-3 col-sm-6 col-xs-12", uniqueKey:'6'},
{title: "Affordable Care Act revision would reduce insured numbers by 24 million, CBO projects", url:'./images/gopplan.jpg', detail: '/articleText/gopplan.txt', author: "By Amy Goldstein, Elise Viebeck, Kelsey Snell and Mike DeBonis March 13 at 7:29 PM", colSize:"col-md-6 col-sm-6 col-xs-12", uniqueKey:'10', canEarn:true},
{title: "CBO: Defunding Planned Parenthood would lead to thousands more births", url:'./images/plannedparent.jpeg', detail: '/articleText/plannedparent.txt', author: "By Sandhya Somashekhar March 13 at 10:27 PM", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'11', canEarn:true},
{title: "WikiLeaks Releases Trove of Alleged C.I.A. Hacking Documents", url:'./images/wikileaks.jpg', detail: '/articleText/wikileaks.txt', author:"By SCOTT SHANE, MATTHEW ROSENBERG and ANDREW W. LEHRENMARCH 7, 2017", colSize:"col-md-3 col-sm-3 col-xs-6", uniqueKey:'12', canEarn:false},
{title: "Trump Abruptly Orders 46 Obama-Era Prosecutors to Resign", url:'./images/justice_master.jpg', detail: '/articleText/obamaera.txt', author:"By CHARLIE SAVAGE and MAGGIE HABERMANMARCH 10, 2017", colSize:"col-md-3 col-sm-4 col-xs-12", uniqueKey:'13', canEarn:true},
{title: "How Healthy Are You? G.O.P. Bill Would Help Employers Find Out", url:'./images/how_healthy.jpg', detail: '/articleText/howhealthy.txt', author: "By REED ABELSONMARCH 10, 2017", colSize: "col-md-6 col-sm-6 col-xs-12", uniqueKey:'14', canEarn:false},
{title: "Michael Flynn Was Paid to Represent Turkey’s Interests During Trump Campaign", url:'./images/flynn.jpg', detail: '/articleText/flynn.txt', author: "By PETER BAKER and MATTHEW ROSENBERGMARCH 10, 2017", colSize: "col-md-3 col-sm-6 col-xs-12", uniqueKey:'15', canEarn:true}];

var articleKey;

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
             <p>{item.content} - <i>{item.user}</i></p>
           </div>
         )
    });
    return (<div>{items}</div>);
  }
})

const WriteResponse = React.createClass({
  render() {
    return (
      <div>
        <h4>Write a Repsonse</h4>
        <div className="textarea-container">
          <textarea rows="4" cols="50" placeholder="What is your opinion?"></textarea>
          <button className="submit-button btn btn-primary">Submit</button>
        </div>
      </div>
    )
  }
})

const WriteStory = React.createClass({
  render() {
    return (
      <div>
        <h4>Write a Story</h4>
        <div className="textarea-container">
          <textarea rows="4" cols="50" placeholder="Empathy!"></textarea>
          <button className="submit-button btn btn-primary">Submit</button>
        </div>

      </div>
    )
  }
})
const Stories = React.createClass({
  render (){
    var items = storyData.map(function(item, i) {
         return(
           <div className="well" key={i}>
             <p>{item.content} - <i>{item.user}</i></p>
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

        <TabList className="tab-container">

          {}

          <Tab className="response-tab one"><h3>Article</h3></Tab>
          <Tab className="response-tab two"><h3>Responses</h3></Tab>
          <Tab className="response-tab three"><h3>Stories</h3></Tab>
          <hr className="underline" />

        </TabList>

        {}

        <TabPanel>
          <div id="articleContent" style={{paddingTop: 5 + 'px'}}></div>
        </TabPanel>
        <TabPanel>
          <WriteResponse/>
          <Responses/>
        </TabPanel>
        <TabPanel>
          <WriteStory/>
            <Stories/>
        </TabPanel>
      </Tabs>
    )
  }
})

//NOTE this will only be one thumbnail

export const MainArticle = React.createClass({
  render(){
    var article = getArticleInfo();
    return (
      <div>
        <h2> {article.title} </h2>
        <h5> By SCOTT SHANE, MATTHEW ROSENBERG and ANDREW W. LEHREN &middot; MARCH 7, 2017 </h5>
        <img src={require(article.url)} alt="trump" style={{width: 100 + '%'}}/>

        <p className="article-caption">The C.I.A. headquarters in Langley, Va. If the WikiLeaks documents are authentic, the release would be a serious blow to the agency</p>
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
        <DoneReading />
      </div>
      <div className="col-md-4">
        <div id="sticky-anchor"></div>
        <div id="sticky-element" className="articleList">
          <SideInfo />
          <SimilarArticles/>
          <hr style={{height:3+'px'}}/>
          <ConsiderReading/>
        </div>
      </div>
    </div>
  )
}
})

const ArticleView = React.createClass({
  render () {
    $(document).ready(function () {
           window.scrollTo(0,0);
       });
    articleKey = this.props.params.uniqueKey;
    return (
      <div>
      <SeemlessCover/>
        <div className="container">
          <PageView/>
        </div>

      </div>

    )
  }
})

export default ArticleView;
