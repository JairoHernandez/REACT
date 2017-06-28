var React = require('react');

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

module.exports = GreeterForm;