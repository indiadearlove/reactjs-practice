var React = require('react');
var ReactRouter = require('react-router');
console.log('first');
var Route = ReactRouter.Route;

var API = require('./api');
var ChirpStore = require('./stores/chirps');

var routes = (<Route handler={require('./components/App')}> </Route>);

API.fetchChirps();
console.log('lol');
ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Root){
  React.render(<Root />, document.getElementById('app'));
});
