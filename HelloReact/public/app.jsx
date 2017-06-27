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

		var name = this.refs.name.value;
		var updates = {};

		if (name.length > 0) {
			this.refs.name.value = '';
			this.props.onNewName(name); // calls function passed in from the parent, where it sets the state below in handleNewName
			//updates.name = name;
		}
	},

	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name"/>
				<button>Set Name</button>
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
		return { name: this.props.name };
	},

	// e is event object it's nothing special jQuery uses it and so does regular JS event handlers. 
	handleNewName: function(name) { 
		
		this.setState({
			name: name
		});
	},

	render: function() {

		// var name = this.props.name; // now becomes this.state.name so a user can now change value of var name.
		var name = this.state.name // ties into getInitialState to get assigned the value from this.props.name, which is disapledy in the Hello line.
		var message = this.props.message;

		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewName={this.handleNewName}/>
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