import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Header extends Component{

	render(){
		var portfolioActive = '';
		var aboutActive = '';
		var backgroundActive = '';
		var page = '';

		if(this.props.page == 'background'){
			backgroundActive = 'active';
			page = 'background';
		} else if(this.props.page == 'portfolio'){
			portfolioActive = 'active';
			page = 'background';
		} else{
			aboutActive = 'active';
			page = 'about';
		}
		return(
			<div>
			  <nav className="navbar navbar-default navbar-fixed-top">
		      <div className="container-fluid">
		        <div className="navbar-header">
		          
		          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>                        
		          </button>
		          <i className="blue navbar-brand fa fa-rocket">ID</i>

		        </div>
		        <div className="collapse navbar-collapse" id="myNavbar">
		          <ul className="nav navbar-nav">
		           <li className={aboutActive}><a onClick={this.props.aboutClick} href="#">About</a></li>
		           <li className={portfolioActive}><a onClick={this.props.portfolioClick} href="#">Portfolio</a></li>
		           <li className={backgroundActive}><a onClick={this.props.backgroundClick} href="#">Professional Background</a></li>
		           <li><a href="#contactContainer">Contact</a></li>
		         </ul>
		        </div>
		      </div>
		    </nav>
			</div>
		)
	}
}

export default Header