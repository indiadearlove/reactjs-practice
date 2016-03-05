var AppActions = require('../actions/AppActions');

module.exports = {
	addNote: function(note){
    $.ajax({
    	url: "https://api.mongolab.com/api/1/databases/blog-react/collections/notes?apiKey=oVHromVpxeK445oZtp5M_8PoE4nFkFIn",
    	data: JSON.stringify(note),
    	type: "POST",
    	contentType: "application/json"
    });
	},

	getNotes: function(){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/blog-react/collections/notes?apiKey=oVHromVpxeK445oZtp5M_8PoE4nFkFIn",
			dataType: 'json',
			cache: false,
			success: function(data){
				console.log(data);
        AppActions.receiveNotes(data);
			}.bind(this),
			error: function(xhr, status, err){
				console.log(err);
			}.bind(this) 
		});
	},

	removeNote: function(noteId){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/blog-react/collections/notes/"+noteId+"?apiKey=oVHromVpxeK445oZtp5M_8PoE4nFkFIn",
			type: "DELETE",
    	async: true,
    	timeout: 3000000,
    	success: function(data){
				console.log('Note Deleted');
			}.bind(this),
			error: function(xhr, status, err){
				console.log(err);
			}.bind(this) 
		});
	}
}

