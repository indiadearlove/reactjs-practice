var React = require('react');

var ChirpInput = React.createClass({
  getInitialState: function(){
    return {
      value: ''
    };
  },
  render: function(){
    return (<div className='row'>
      <div className='nine columns'>
        <input
          className='u-full-width'
          type='text'
          value={this.state.value}
          placeholder='Say Something!'
          onChange={this.handleChange} />
      </div>
    </div>);
  },
  handleChange: function(evt){
    this.setState({
      value: evt.target.value
    });
  },
  handleClick: function(evt){
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  }
});

module.exports = ChirpInput;
