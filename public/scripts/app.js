'use strict';

console.log('App.js is running!');

var app = {
    title: 'Visibility Toggle'
};

var appRoot = document.getElementById('app');

var visibility = false;
var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey you are seeing something now.'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
