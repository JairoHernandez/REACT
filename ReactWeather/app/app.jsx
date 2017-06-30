var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// The line above is destructuring syntax, which is equivalent to this for say just Route.
// var Route = require('react-router').Route;
// or
// var {name} = obj; is same as var name = obj.name;
var Main = require('Main');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>

		</Route>		
	</Router>, 
	document.getElementById('app')
);