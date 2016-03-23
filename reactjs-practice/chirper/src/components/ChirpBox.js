var React = require('react');
var utils = require('../utils');
var Link = require('react-router').Link;
var moment = require('moment');

var ChirpBox = React.createClass({
    render: function(){
      var c = this.props.chirp;
      return (<li className='row chirp'>
        <Link className='two colums' to='user' params={{id: c:userId}}>
          <img src={utils.avatar(c.email)} />
        </Link>
        <div className='ten columns'>
          <p>
            <strong> {c.fullname} </strong>
            <span className='timestamp'>
              @{c.username} {moment(c.$created).fromNow()}
          </p>
          <p> {c.text} </p>
        </div>
      </li>);
  }
});

module.exports = ChirpBox;
