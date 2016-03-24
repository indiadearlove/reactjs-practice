var React = require('react');
var Link = require('react-router').Link;
var UserStore = require('../stores/users');

var Navigation = module.exports = React.createClass({
  getInitalState: function(){
    return {
      username: UserStore.currentUser.username
    };
  },
  render: function(){
    return <ul>
      <li><Link to='home'> Timeline </Link> </li>
      <li><Link to='users'> Users </Link> </li>
      <li><a href='/logout'> Logout </a>  </li>

      </ul>;
  }
});
