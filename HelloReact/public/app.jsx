var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

// You can also pass in variable values just like componet properties. 
// This means any type is availabe when working with props.
var firstName = 'Odie'

ReactDOM.render(
	<Greeter name={firstName}/>, document.getElementById('app')
);