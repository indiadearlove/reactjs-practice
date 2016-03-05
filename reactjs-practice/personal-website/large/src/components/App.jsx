import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './sections/Header.jsx'
import Footer from './sections/Footer.jsx'
import About from './sections/About.jsx'
import Background from './sections/Background.jsx'
import Portfolio from './sections/Portfolio.jsx'

class App extends Component{

	 setCurrent(page){
  	this.setState({page});
  }
  
	render(){
    var body = <About />
    console.log(this.setState({page}));
		return(
			<div>
			  <Header setCurrent={this.setCurrent.bind(this)} />
			  {body}
			  <Footer />
			</div>
		)
	}
}

export default App