var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Nav/>
                <h2>Main Component</h2>
            </div>
        );
    }
});

// If you forget this you will get 'Error: The root route must render a single element'
module.exports = Main; 