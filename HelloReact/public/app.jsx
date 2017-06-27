var GreeterMessage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Some H1</h1>
				<p>Some paragraph</p>
			</div>
		);
	}
});

var GreeterForm = React.createClass({
	onFormSubmit: function(e) {
		e.prenvetDefault();

		var name = this.refs.name.value;

		if (name.length > 0) {
			this.refs.name.value = '';
		}
	},

	render: function() {
		return (
			<div>
				<form>
					<input type="text" ref="name"/>
					<button>Set Name</button>
				</form>
			</div>
		);
	}
});

var Greeter = React.createClass({

	getDefaultProps: function() {
		return {
			name: 'React', // This is a prop accessed by this.props.
			message: 'This is React message.'
		};
	},

	getInitialState: function() {
		return { name: this.props.name };
	},

	// e is event object it's nothing special jQuery uses it and so does regular JS event handlers. 
	onButtonClick: function(e) { 
		
		e.preventDefault(); // Prevents form from causing full browser refresh when its submitted. This is the goal of React for SPAs.

		var nameRef = this.refs.name;
		var name= nameRef.value; // tied to ref field from from.
		nameRef.value = '';

		if (typeof name === 'string' && name.length > 0) {

			this.setState({
				name: name
			});
		}
	},

	render: function() {

		// var name = this.props.name; // now becomes this.state.name so a user can now change value of var name.
		var name = this.state.name // ties into getInitialState to get assigned the value from this.props.name, which is disapledy in the Hello line.
		var message = this.props.message;

		return (
			<div>
				<h1>Hello {name}!!</h1> 
				<p>{message + '!!'}</p>

				<GreeterMessage/>

				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="name"/>
					<button>Set Name</button>
				</form>

				<GreeterForm/>
			</div>
		);
	}
});

// You can also pass in variable values just like componet properties. 
// This means any type is availabe when working with props.
var firstName = 'Jairo'

ReactDOM.render(
	<Greeter name={firstName} message='This is prop message.' />, document.getElementById('app')
);