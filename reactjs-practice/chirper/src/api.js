var actions = require('./actions');
var dispatcher = require('./dispatcher');
var constants = require('./constants');

var API = module.exports = {
  fetchChirps: function(){
    get('/api/chirps').then(actions.gotChirps.bind(actions));
  },
  saveChirp: function(text){
    text = text.trim();
    if(text === '') return;
  }
};

function get(url){
  return fetch(url, {
    credentials: 'same-origin'
  }).then(function(res){
    return res.json();
  });
}

// function post(url){
//   return fetch(url, {
//     method: 'POST',
//     credentials: 'include',
//     body: JSON.stringify(body || {}),
//   }).then(function(res){
//     return res.json();
//   });
// }

dispatcher.register(function(action){
  switch(action.actionType){
    case constants.CHIRP:
      API.saveChirp(action.data);
      break;
  }
});
