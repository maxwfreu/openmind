import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articleStyle.css'
import './style/response.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { SeemlessCover } from './main'

var $ = require ('jquery')

var sideData = [{title: "North Korea Tensions Pose Early, and Perilous, Test for Trump", url:'./images/nkorea.jpg'}, {title:"Dutch Fear Russian Meddling, and U.S. Cash, in Election ", url:'./images/dutch.jpg'}, {title:"Trump is a madman", url:'./images/dictator.jpg'}];
Tabs.setUseDefaultStyles(false);

var responseData = [{content: "This is a response", user:"John Doe"}, {content: "Wow, this sure is interesting!!!", user:"Jane Doe"}];
var storyData = [{content: "This is a story", user:"John Doe"},  {content: "This one time this thing happened to me that is simliar to this :D", user:"Jane Doe"}];

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

const ResponseTabs = React.createClass({
  handleSelect(index, last) {
    if(index ===0){
      $(function() {
        $("#articleContent").load("articleText/wikiLeaks.html");
      });
    }
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

          {/*
            <Tab/> is the actual tab component that users will interact with.

            Selecting a tab can be done by either clicking with the mouse,
            or by using the keyboard tab to give focus then navigating with
            the arrow keys (right/down to select tab to the right of selected,
            left/up to select tab to the left of selected).

            The content of the <Tab/> (this.props.children) will be shown as the label.
          */}

          <Tab className="response-tab one"><h3>Article</h3></Tab>
          <Tab className="response-tab two"><h3>Responses</h3></Tab>
          <Tab className="response-tab three"><h3>Stories</h3></Tab>
          <hr className="underline" />

        </TabList>

        {/*
          <TabPanel/> is the content for the tab.

          There should be an equal number of <Tab/> and <TabPanel/> components.
          <Tab/> and <TabPanel/> components are tied together by the order in
          which they appear. The first (index 0) <Tab/> will be associated with
          the <TabPanel/> of the same index. When you run this example with
          `selectedIndex` equal to 0, the tab with the label "Foo" will be selected
          and the content shown will be "Hello from Foo".

          As with <Tab/> the content of <TabPanel/> will be shown as the content.
        */}

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



export const SideArticle = React.createClass({
  render (){
    var items = sideData.map(function(item, i) {
         return(
           <div className="thumbnail" key={i}>
             <img src={require(item.url)} alt="trump"/>
             <div className="caption">
               <h5> {item.title} </h5>
             </div>
           </div>
         )
    });
    return (<div>{items}</div>);
  }
})

export const MainArticle = React.createClass({
  render(){
    return (
      <div>
        <h2> WikiLeaks Releases Trove of Alleged C.I.A. Hacking Documents </h2>
        <h5> By SCOTT SHANE, MATTHEW ROSENBERG and ANDREW W. LEHREN &middot; MARCH 7, 2017 </h5>
        <img src={require('./images/wikileaks.jpg')} alt="trump" style={{width: 100 + '%'}}/>

        <p className="article-caption">The C.I.A. headquarters in Langley, Va. If the WikiLeaks documents are authentic, the release would be a serious blow to the agency</p>
        <ResponseTabs/>
      </div>
    )
  }
})
// NOTE this is where u inject text
// <div id="articleContent" style={{paddingTop: 5 + 'px'}}></div>

//NOTE this is icon stuff
// <div className="infoContainer">
//   <div className="ovalViewOverlay"><div className="moneyInOvalView"> 7 $</div></div>
//   <i className="material-icons icon" style={{fontSize:36 + 'px'}}>people</i>
//   <div className="centered"> 508 Readers</div>
//   <i className="material-icons icon" style={{fontSize:34+'px'}}>star_rate</i>
//   <div className="centered"> 10,003 Credits Raised</div>
// </div>
// <div className="share">
//   <button type="button" className="btn btn-default btn-sm">
//     <span className="glyphicon glyphicon-share-alt"></span> Share
//   </button>
// </div>

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
        <div className="articleList">
          <SideArticle />
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

const ArticleView = React.createClass({
  render () {
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
