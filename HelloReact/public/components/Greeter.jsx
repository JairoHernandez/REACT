var React = require('react');
var GreeterForm = require('./GreeterForm');
var GreeterMessage = require('./GreeterMessage');

var Greeter = React.createClass({

	getDefaultProps: function() {
		return {
			name: 'React', // This is a prop accessed by this.props.
			message: 'This is React message sir.'
		};
	},

	getInitialState: function() {
		return { 
			name: this.props.name,
			message: this.props.message
		};
	},

	// e is event object it's nothing special jQuery uses it and so does regular JS event handlers. 
	handleNewData: function(updates) { 
		
		// takes in an object and updates is such.
		this.setState(updates);
	},

	render: function() {

		// var name = this.props.name; // now becomes this.state.name so a user can now change value of var name.
		var name = this.state.name // ties into getInitialState 'name' state, which is assigned this.props.name value.
		var message = this.state.message;

		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewData={this.handleNewData}/>
			</div>
		);
	}
});

module.exports = Greeter;