import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component{

	render(){
		return(
		  <div className="container footerContainer" id="contactContainer">

        <p className="lead center">Want to get in touch</p>
        <div className="social-media">
          
          <a className="btn btn-lg btn-social-icon btn-envelope" onclick="window.location.href='mailto:india_dearlove@yahoo.co.uk'">
            <i className="fa fa-envelope"></i>
          </a>
          <a className="btn btn-lg btn-social-icon btn-twitter" href="http://www.twitter.com/indiadearlove" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>        
          <a className="btn btn-lg btn-social-icon btn-github" href="https://github.com/indiadearlove" target="_blank">
            <i className="fa fa-github"></i>
          </a> 
          <a className="btn btn-lg btn-social-icon btn-linkedin" href="https://uk.linkedin.com/in/indiadearlove" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
          
          <br /><br />
          <p className="copyright">© 2015 Code by India Dearlove, obviously!</p>

        </div>
			</div>
		)
	}
}

export default Footer