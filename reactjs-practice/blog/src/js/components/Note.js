var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Note = React.createClass({
	render: function(){
		return(
			<div className="column {this.props.note.subject}">
			  <div onDoubleClick={this.removeNote.bind(this, this.props.note._id)} className="note">
			    <h4 className="pull-right">{this.props.note.name}<small> {this.props.note.time}</small></h4>
			    <h5>{this.props.note.subject}</h5>
			    <p>{this.props.note.text}</p>
			  </div>
			  <br />
			</div>
		);
	},

	removeNote: function(i, j, k){
		AppActions.removeNote(i.$oid);
	}

});

module.exports = Note;