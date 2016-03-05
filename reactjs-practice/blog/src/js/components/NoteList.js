var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Note = require('./Note.js');

var NoteList = React.createClass({
	render: function(){
		console.log('Test');
		return(
			<div className="row">
			  {
			  	this.props.notes.map(function(note, i){
			  		return (
              <Note note={note} key={i} />
			  		);
			  	})
			  }
			</div>
		);
	}

});

module.exports = NoteList;