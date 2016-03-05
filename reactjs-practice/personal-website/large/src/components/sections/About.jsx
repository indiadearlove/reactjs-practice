import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class About extends Component{

	render(){
		return(
			<div>

			    <div className="container contentContainer" id="topContainer">
			      <div id="background-image"></div>
			      <div className="row">
			        <div className="col-md-6 col-md-offset-3 wow swing" id="topRow">
			      
			          <h1 className="marginTop blue">INDIA DEARLOVE</h1>
			          <p className="lead blue">Web Developer</p>
			      
			        </div> 
			        <hr />     
			      </div>
			    </div>
				<div className="contentContainer" id="aboutContainer">
	    
	      <div className="wow fadeIn">
	        <h1 className="center title">A little bit about me...</h1>
	        <img className="profile-pic center" src="./images/profile.jpg" />
	        <br />
	        <p className="description center">Hi, I am India, a freelance web developer, from London. I write code and create websites. So far I have made a handful of websites for small businesses as well as many of my own for fun. Over the past few years I have been increasing my knowledge by self-teaching and doing various courses, most of which are online. For me, learning will always be ongoing, as technology is forever changing and updating. Another thing I love to do is travel and that is why at the moment I love the freedom of being a freelancer.</p>
	        <p className="description center">Currently based in Melbourne for a few months, because that is the beauty of being a freelancer, and open for work.</p>
	        <br />
	        <a className="btn btn-sample btn-lg center-block" href="professional-background.html" role="button" id="index-btn">my professional background</a>
	      </div>

	    </div>
    </div>
		)
	}
}

export default About