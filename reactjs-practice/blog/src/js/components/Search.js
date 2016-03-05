var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Note = require('./Note.js');

var Search = React.createClass({
	render: function(){
		console.log('Test');
		return(
			<div className="container inner-bottom-xs">
				<ul className="filter text-center">
					<li><a href="#" data-filter="*" className="active">All</a></li>
					<li><a href="#" data-filter=".identity">Tech</a></li>
					<li><a href="#" data-filter=".interactive">Music</a></li>
					<li><a href="#" data-filter=".print">Gaming</a></li>
					<li><a href="#" data-filter=".photography">Films</a></li>
				</ul>
			</div>
		);
	}

});

module.exports = Search;