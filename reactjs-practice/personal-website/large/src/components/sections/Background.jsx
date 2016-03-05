import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Background extends Component{

	render(){
		return(
			<div>
			  <div className="contentContainer" id="bg-container">
    
		      <h1 className="center title">Professional Background</h1>
		      <br />
		      <div className="section">
		        <div className="bg-title"><h2>Education</h2></div>
		          <div className="bg-section">
		            <h4 className="blue">Exeter University, Computer Science and Maths</h4>
		            <h4> 2013-2014</h4>
		            <p className="bg-description">While I was only at university for a year, I still managed to get a lot out of it learning about the fundamentals of programming and computer systems; in addition, I took part in various clubs, from Ski Club to Maths Society. However, I decided that university was not for me as it was very theory based and I want to actually code, also I found that I was learning better on my own than from lectures so I decided to leave and go a different path.</p>
		            <br />
		            <h4 className="blue">Kings Canterbury</h4>
		            <h4>2008-2013</h4>
		            <p className="bg-description">King’s is where I took my GCSE’s and A-levels. For A-levels I took Maths, Further Maths and Physics receiving A*AB respectively. Every year I would do the British Maths Olympiad always achieving gold or silver, and in my last years I did both Sevenoaks Code-Breaking Challenge and Southampton University Cipher Challenge. Also, I always kept up with sports, playing everything from Hockey to Badminton.</p>
		        </div>
		      </div>
		      <div className="section">
		        <div className="bg-title"><h2>Courses</h2></div>
		        <div className="bg-section">
		          <h4 className="blue">Full-Stack Web Developer Course</h4>
		          <h4>Makers Academy, 2014-2015</h4>
		          <p className="bg-description">MA is probably one of the hardest and best things I ever did; it is an intense coding course that really pushes you to your limits. This gave me a very solid foundation for coding which allowed me to get my first coding jobs.</p>
		          <br />
		          <h4 className="blue">Women in Leadership</h4>
		          <h4>Coursea, Case Western Reserve University, 2015</h4>
		          <p className="bg-description">I took this online course as it is aimed to help women (and men) to engage in purposeful career development and I am in the early stages of my career. It turned out to be a great stepping stone to my future goals, and helped me to figure out where I want to go.</p>
		          <br />
		          <h4 className="blue">Responsive Web Design</h4>
		          <h4>Skillcrush, 2015</h4>
		          <p className="bg-description">People search online on their phone, and the numbers are only growing. After I realized this I knew it was essential to learn how to make beautiful web pages that are responsive to mobile phones and tablets, which is why I am currently taking this course.</p>
		          <br />
		          <h4 className="blue">Calculus One</h4>
		          <h4>Coursea, Ohio State University, 2015</h4>
		          <p className="bg-description">This online course teaches the fundamentals of higher calculus. I already studied most of it at university, but I wanted a refresher.</p>           
		        </div>
		      </div>

		      <br />
		      <a className="btn btn-sample btn-lg center-block" href="portfolio-page.html" role="button">have a look at my portfolio</a>

        </div>
			</div>
		)
	}
}

export default Background