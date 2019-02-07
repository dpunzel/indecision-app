'use strict';

console.log('App.js is running!');

// create app object title/subtitle
// user title/subtitle in the template
// render template
var app = {
    title: 'The Indecision App',
    subtitle: 'Some random content'
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
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
var user = {
    name: 'David',
    age: 125,
    location: 'Kronos'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    } else {
        return undefined;
    }
}

// var userName = 'David';
// var userAge = 126;
// var userLocation = 'Kronos';

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(templateTwo, appRoot);
