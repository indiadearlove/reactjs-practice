var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddNoteForm = require('./AddNoteForm.js');
var NoteList = require('./NoteList.js');
var Search = require('./Search.js');

function getAppState(){
	return {
		notes: AppStore.getNotes()
	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},

	render: function(){
		
		return(
			<div>
				<div className="">
					<div className="">
						<div className="">
							<div className="row column col-xs-12">
								<br />
								<AddNoteForm />
							</div>
						</div>
						<div className="">
							<div className="row column col-xs-12">
								<br />
								<Search />
							</div>
						</div>
						<div className="row column col-xs-12" data-off-canvas-content>
						  <NoteList notes = {this.state.notes} />
						</div>
					</div>
				</div>
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;