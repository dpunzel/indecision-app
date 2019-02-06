'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

// Create a templateTwo var JSX expression
// div element
// h1 with my name
// create a p tag with age: xx
// create p tag location: xxxx
// render templateTwo in stead of template one

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'David Punzel'
    ),
    React.createElement(
        'p',
        null,
        'Age: 22'
    ),
    React.createElement(
        'p',
        null,
        'Location: Portland Oregon'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
