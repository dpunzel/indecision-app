'use strict';

console.log('App.js is running!');

var app = {
    title: 'The Indecision App',
    subtitle: 'Some random content',
    options: ['One', 'Two']
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
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' + ' ' + app.options : 'No options'
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

// const user = {
//     name: 'David',
//     age: 12,
//     location: 'Kronos'
// };
//
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     } else {
//         return undefined;
//     }
// }
//
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {/*<p>Age: {user.age}</p>*/}
//         {/*<p>Location: {getLocation(user.location)}</p>*/}
//         {getLocation(user.location)}
//     </div>
// );
var appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);
