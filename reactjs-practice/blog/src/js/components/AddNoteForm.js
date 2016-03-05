var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddNoteForm = React.createClass({
	render: function(){
		return(
			<div>
				<h5>Add A Comment</h5>
				<form onSubmit={this.onSubmit}>
					<div className="row">
						<div className="large-12 columns">
							<label>Name
								<input type="text" ref="name" placeholder="Enter Text..." />
							</label>
							<label>Comment
								<textarea type="text" ref="text" rows="5"></textarea>
							</label>
							<label>Subject
								<select ref="subject">
								  <option value="tech">Tech</option>
								  <option value="music">Music</option>
								  <option value="gaming">Gaming</option>
								  <option value="films">Films</option>
								</select>
							</label>
							
							<button className="button">Add</button>
						</div>
					</div>
				</form>
			</div>
		);
	},

	onSubmit: function(e){
		e.preventDefault();
		var time = new Date();
		time = String(time).substr(0, 24);
		console.log(time);


		var note = {
			text: this.refs.text.value.trim(),
			time: time,
			name: this.refs.name.value.trim(),
			subject: this.refs.subject.value.trim()
		}

		AppActions.addNote(note);
	}

});

module.exports = AddNoteForm;