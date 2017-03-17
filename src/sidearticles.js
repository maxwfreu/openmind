import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articleStyle.css'
import './style/response.css'
import PromotePopup from './promoteBtn'

var points = 0;
var totalPoints = 0;
function generateDetail(canearn){
  if(canearn === true){
    return(
      <h4> Read this article to earn 50 points. To recieve the points, click the “I’m done reading” button when you’ve finished. (We’ll be able to tell if you didn’t actually read it).</h4>
    )
  } else return (
    <h4> After reading this article you will be able to use your points to promote it to other readers! To promote, click the “I’m done reading” button when you’ve finished. </h4>
  );
}

function showReadButtion(canearn){
  if(canearn === true){
    return(
      <div>
        <div id="promote-button" style={{display: "none"}}>
          <PromotePopup points={totalPoints}/>
        </div>
        <div id="earn-content">
          <div className="earn-point-indicator">
            <p>Read <b>+ {points}</b></p>
          </div>
        <div className="numTotalPoints">
            <p>{totalPoints} pts</p>
        </div>
      </div>
      </div>

  )
} else return (
  <PromotePopup points={totalPoints}/>
);
}

export const SideInfo = React.createClass({
  render () {
    points = this.props.points;
    totalPoints = this.props.totalPoints;
    return (
      <div className="infoBox">
        <div id="promote-button-place">{showReadButtion(this.props.canEarn)}</div>
          <div className="row">
          <div className="contributedBy">
            <p><b>Natasha Berk, Fillippa Karrfelt + {(Math.floor(Math.random() * (40000 - 10000) + 10000)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b> others promoted </p>
          </div>
        </div>
        <div className="row">
          <div className="readBy">
            <p><b>Max Freundlich, Peter Wood + {(Math.floor(Math.random() * (100000 - 50000) + 50000)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </b>have read</p>
          </div>
        </div>
        <p className="contribute-details">Contribute points to this article to promote it and increase its ranking in the news feeds of those who haven't been exposed to this perspective</p>

      </div>
    )
  }
})

export const SimilarArticles = React.createClass({
  render(){
    return (
      <div className="similarArticles">
        <h4>Similar Articles</h4>
        <div>
          <h5 className="title-group">
            White House budget director’s false claims about the Obamacare legislative process
             <span className="title-group mid">&#124; </span>
             <p className="title-group"> <b>+50</b> </p>
        </h5>

        </div>
        <div>
          <h5 className="title-group">
            Whoops! Sorry about that frigid camp-out, but ballot placement is a lottery
             <span className="title-group mid">&#124; </span>
             <p className="title-group"> <b>+45</b> </p>
           </h5>
        </div>
        <div>
          <h5 className="title-group">
            President Trump’s war on quotation marks
             <span className="title-group mid">&#124; </span>
             <p className="title-group"> <b>+40</b> </p>
           </h5>
        </div>
      </div>
    )
  }
})

const DoneReading = React.createClass({
  render(){
    return (
      <div className="doneReading" data-target="donePopup">
            <h3> I'm done reading </h3>
      </div>
    )
  }
})

export const ConsiderReading = React.createClass({
  render(){
    return (
      <div className="similarArticles">
        <h4>Consider Reading</h4>
        <div>
          <h5 className="title-group">
            Sean Spicer just explained why ‘wire tapping’ is different from wiretapping
             <span className="title-group mid">&#124; </span>
             <p className="title-group"> <b>+30</b> </p>
           </h5>
        </div>
        <div>
          <h5 className="title-group">
            Democrats hope to use Obamacare rewrite to turn activism into change
             <span className="title-group mid">&#124; </span>
             <p className="title-group"> <b>+40</b> </p>
           </h5>
        </div>
        <div>
          <h5 className="title-group">
              Affordable Care Act revision would reduce insured numbers by 24 million, CBO projects
             <span className="title-group mid">&#124; </span>
             <p className="title-group"> <b>+60</b> </p>
           </h5>
        </div>
      </div>
    )
  }
})
