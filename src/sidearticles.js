import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/articleStyle.css'
import './style/response.css'
import PromotePopup from './promoteBtn'

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
        <div className="earn-point-indicator">
          <p>Read <b>+50</b></p>
        </div>
      <div className="numTotalPoints">
          <p>3,656 pts</p>
      </div>
    </div>
  )
} else return (
  <PromotePopup/>
);
}

export const SideInfo = React.createClass({
  render () {
    return (
      <div className="infoBox">
          {showReadButtion(this.props.canEarn)}
          <div className="row">
          <div className="contributedBy">
            <div className="circles">
              <img className="img-circle" src={require('./images/max.jpg')} alt="max"/>
              <img className="img-circle img-next" src={require('./images/natasha.jpg')} alt="natasha"/>
              <img className="img-circle img-next" src={require('./images/pippa.jpg')} alt="pippa"/>
            </div>
                        <h4>+ 567 have promoted</h4>
          </div>
        </div>
        <div className="row">
          <div className="readBy">
            <div className="circles">
              <img className="img-circle" src={require('./images/pippa.jpg')} alt="pippa"/>
              <img className="img-circle img-next" src={require('./images/natasha.jpg')}  alt="natasha"/>
              <img className="img-circle img-next" src={require('./images/max.jpg')} alt="max"/>
            </div>
                        <h4>+ 354 have read</h4>
          </div>
        </div>
      </div>
    )
  }
})

export const SimilarArticles = React.createClass({
  render(){
    return (
      <div className="similarArticles">
        <h2>Similar Articles</h2>
        <div>
          <h5 className="title-group">
            White House budget director’s false claims about the Obamacare legislative process
             <span className="title-group mid">&#124; </span>
             <p className="title-group"> +40 </p>
        </h5>

        </div>
        <div>
          <h5 className="title-group">
            Whoops! Sorry about that frigid camp-out, but ballot placement is a lottery
             <span className="title-group mid">&#124; </span>
             <p className="title-group"> +50 </p>
           </h5>
        </div>
        <div>
          <h5 className="title-group">
            President Trump’s war on quotation marks
             <span className="title-group mid">&#124; </span>
             <p className="title-group"> +40 </p>
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
        <h2>Consider Reading</h2>
        <div>
          <h5 className="title-group">
            Sean Spicer just explained why ‘wire tapping’ is different from wiretapping
             <span className="title-group mid">&#124; </span>
             <p className="title-group"> +30 </p>
           </h5>
        </div>
        <div>
          <h5 className="title-group">
            Democrats hope to use Obamacare rewrite to turn activism into change
             <span className="title-group mid">&#124; </span>
             <p className="title-group"> +40 </p>
           </h5>
        </div>
        <div>
          <h5 className="title-group">
              Affordable Care Act revision would reduce insured numbers by 24 million, CBO projects
             <span className="title-group mid">&#124; </span>
             <p className="title-group"> +60 </p>
           </h5>
        </div>
      </div>
    )
  }
})
