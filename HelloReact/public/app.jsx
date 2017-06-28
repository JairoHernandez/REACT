var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
	render: function() {
		var name = this.props.name;
		var message = this.props.message;

		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>
			</div>
		);
	}
});

var GreeterForm = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();

		var updates = {}; // will populate to then pass into handleNewData
		var name = this.refs.name.value;
		var message = this.refs.message.value;
		

		if (name.length > 0) {
			this.refs.name.value = '';
			updates.name = name;
		}

		if (message.length > 0) {
			this.refs.message.value = '';
			updates.message = message;
		}

		this.props.onNewData(updates); // passes up the chain to Greeter component.
	},

	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input type="text" ref="name" placeholder="Enter name"/>
				</div>	
				<div>			
					<input type="text" ref="message" placeholder="Enter message"/>
				</div>	
				<div>				
					<button>Submit</button>
				</div>
			</form>
		);
	}
});

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

// You can also pass in variable values just like componet properties. 
// This means any type is availabe when working with props.
var firstName = 'Jairo'

ReactDOM.render(
	<Greeter name={firstName}/>, document.getElementById('app')
);