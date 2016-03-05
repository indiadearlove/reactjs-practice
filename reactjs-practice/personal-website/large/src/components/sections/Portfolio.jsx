import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends Component{

	render(){
		return(
			<div>
			  <div className="contentContainer" id="backgroundContainer">
    
		      <h1 className="center title">Portfolio</h1>
		      <br />
		      
		      <div className="row">
		        <div className="col-sm-6 col-sm-push-6">
		          <h2 className="blue text"><a href="http://www.divaski.com/" target="_blank">Diva Ski</a></h2>

		          <p className="pp-description text">For me this has been an ongoing project for the last few months. Having previously created the website for the clients in wix, I am currently coding a new one for them. While the new site will be very similar it will be more responsive. The technologies that I am using to create this are PHP, HTML, CSS, MySQL, Bootstrap, Javascript and JQuery to name a few.</p>
		        </div>
		        <div className="col-sm-6 col-sm-pull-6">
		          <div id="myCarousel" className="carousel slide" data-ride="carousel">
		  
		            <ol className="carousel-indicators">
		              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
		              <li data-target="#myCarousel" data-slide-to="1"></li>
		              <li data-target="#myCarousel" data-slide-to="2"></li>
		            </ol>

		            <div className="carousel-inner" role="listbox">

		              <div className="item active">
		                <img src="./images/portfolio-screenshots/divaski-ourservice.png" alt="Chania" />
		              </div>

		              <div className="item">
		                <img src="./images/portfolio-screenshots/divaski-contact.png" alt="Chania" />
		              </div>
		            
		              <div className="item">
		                <img src="./images/portfolio-screenshots/divaski-accom.png" alt="Flower" />
		              </div>
		          
		            </div>

		            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
		              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		              <span className="sr-only">Previous</span>
		            </a>
		            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
		              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		              <span className="sr-only">Next</span>
		            </a>
		          </div>
		          <br />
		        </div>
		      </div>

		      <div className="row">
		        <div className="col-sm-6 col-sm-push-6">
		          <h2 className="text blue"><a href="http://linkup-battersea.org/" target="_blank">Link Up Battersea</a></h2>

		          <p className="pp-description text">Link Up Battersea brings together volunteers willing to share their professional skills with local charities, and they needed a website which could display opportunities that volunteers could search through. While I originally set out to use Node and MongoDB this turned into a PHP project for various reasons. Other technologies used were HTML, CSS, Bootstrap etc.</p>
		        </div>
		        <div className="col-sm-6 col-sm-pull-6">
		          <div id="myCarousel-6" className="carousel slide" data-ride="carousel">
		  
		            <ol className="carousel-indicators">
		              <li data-target="#myCarousel-6" data-slide-to="0" className="active"></li>
		              <li data-target="#myCarousel-6" data-slide-to="1"></li>
		              <li data-target="#myCarousel-6" data-slide-to="2"></li>
		            </ol>

		            <div className="carousel-inner" role="listbox">

		              <div className="item active">
		                <img src="./images/portfolio-screenshots/linkup1.png" alt="Chania" />
		              </div>

		              <div className="item">
		                <img src="./images/portfolio-screenshots/linkup2.png" alt="Chania" />
		              </div>
		            
		              <div className="item">
		                <img src="./images/portfolio-screenshots/linkup3.png" alt="Flower" />
		              </div>
		          
		            </div>

		            <a className="left carousel-control" href="#myCarousel-6" role="button" data-slide="prev">
		              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		              <span className="sr-only">Previous</span>
		            </a>
		            <a className="right carousel-control" href="#myCarousel-6" role="button" data-slide="next">
		              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		              <span className="sr-only">Next</span>
		            </a>
		          </div>
		          <br />
		        </div>
		        
		        
		      </div>

		      <div className="row">
		        <div className="col-sm-6 col-sm-push-6">
		          <h2 className="text blue">I am ME</h2>

		          <p className="pp-description text">The challenge was to create a website, that could be shown to potential investors, within 10 days. Including me, we were a team of five. The clients who bought us this project had already made various frameworks and had a solid vision of what the site would look like. We used various technologies including HTML, CSS, Javascript, JQuery, Ruby, Rails and RSpec.</p>
		        </div>
		        <div className="col-sm-6 col-sm-pull-6">
		          <div id="myCarousel-2" className="carousel slide" data-ride="carousel">
		    
		            <ol className="carousel-indicators">
		              <li data-target="#myCarousel-2" data-slide-to="0" className="active"></li>
		              <li data-target="#myCarousel-2" data-slide-to="1"></li>
		              <li data-target="#myCarousel-2" data-slide-to="2"></li>
		            </ol>

		            <div className="carousel-inner" role="listbox">

		              <div className="item active">
		                <img src="./images/portfolio-screenshots/iamMEmain.png" alt="Chania" />
		              </div>

		              <div className="item">
		                <img src="./images/portfolio-screenshots/iamme1.png" alt="Chania" />
		              </div>
		            
		              <div className="item">
		                <img src="./images/portfolio-screenshots/iamme2.png" alt="Flower" />
		              </div>
		          
		            </div>
		            <a className="left carousel-control" href="#myCarousel-2" role="button" data-slide="prev">
		              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		              <span className="sr-only">Previous</span>
		            </a>
		            <a className="right carousel-control" href="#myCarousel-2" role="button" data-slide="next">
		              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		              <span className="sr-only">Next</span>
		            </a>
		          </div>
		          <br />
		        </div>
		        
		        
		      </div>

		      <div className="row">
		        <div className="col-sm-6 col-sm-push-6">
		          <h2 className="text blue">GeoLocation Tracker</h2>

		          <p className="pp-description text">This was a small project that I did just to learn more about APIs and API keys. For this I used the Google maps API to gather the users location and display the information. The technologies I used were HTML, CSS, Javascript.</p>
		        </div>
		        <div className="col-sm-6 col-sm-pull-6">
		          <div id="myCarousel-4" className="carousel slide" data-ride="carousel">
		            <ol className="carousel-indicators">
		              <li data-target="#myCarousel-4" data-slide-to="0" className="active"></li>
		              <li data-target="#myCarousel-4" data-slide-to="1"></li>
		            </ol>

		            <div className="carousel-inner" role="listbox">

		              <div className="item active">
		                <img src="./images/portfolio-screenshots/geolocation1.png" alt="Chania" />
		              </div>

		              <div className="item">
		                <img src="./images/portfolio-screenshots/geolocation2.png" alt="Chania" />
		              </div>
		          
		            </div>

		            <a className="left carousel-control" href="#myCarousel-4" role="button" data-slide="prev">
		              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		              <span className="sr-only">Previous</span>
		            </a>
		            <a className="right carousel-control" href="#myCarousel-4" role="button" data-slide="next">
		              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		              <span className="sr-only">Next</span>
		            </a>
		          </div>
		          <br />
		        </div>

		      </div>
		      <div className="row">
		        <div className="col-sm-6 col-sm-push-6">

		          <h2 className="text blue">Weather Checker</h2>

		          <p className="text pp-description">The reason for making this website was simply to put my PHP skills to the test. I used PHP to scrape information from a weather website so that the information was easily accessible. The technologies I used were Bootstrap, PHP, HTML, CSS, Javascript.</p>
		        </div>
		        <div className="col-sm-6 col-sm-pull-6">
		          <div id="myCarousel-5" className="carousel slide" data-ride="carousel">

		            <div className="carousel-inner" role="listbox">

		              <div className="item active">
		                <img src="./images/portfolio-screenshots/weather-checker-desktop.png" alt="Chania" />
		              </div>
		          
		            </div>
		            <br />

		          </div>
		        </div>

		      </div>
		      <div className="row">
		        <div className="col-sm-6 col-sm-push-6">

		          <h2 className="text blue">PigPong</h2>

		          <p className="text pp-description">This was a group-based project that took us 4 days to make. During this project I learnt about the physics of gaming and frameworks by using Phaser, a HTML5 game framework. I also made the logo. A few technologies I used were JQuery, Node, HTML, CSS, Javascript.</p>

		        </div>
		        <div className="col-sm-6 col-sm-pull-6">
		          <div id="myCarousel-3" className="carousel slide" data-ride="carousel">
		            <ol className="carousel-indicators">
		              <li data-target="#myCarousel-3" data-slide-to="0" className="active"></li>
		              <li data-target="#myCarousel-3" data-slide-to="1"></li>
		            </ol>

		            <div className="carousel-inner" role="listbox">

		              <div className="item active">
		                <img src="./images/portfolio-screenshots/pig-pong-main.png" alt="Chania" />
		              </div>

		              <div className="item">
		                <img src="./images/portfolio-screenshots/pig-pong.png" alt="Chania" />
		              </div>
		          
		            </div>

		            <a className="left carousel-control" href="#myCarousel-3" role="button" data-slide="prev">
		              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		              <span className="sr-only">Previous</span>
		            </a>
		            <a className="right carousel-control" href="#myCarousel-3" role="button" data-slide="next">
		              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		              <span className="sr-only">Next</span>
		            </a>

		          </div>
		        </div>

		      </div>
		    </div>
			</div>
		)
	}
}

export default Portfolio