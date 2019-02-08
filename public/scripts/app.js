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
var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
    console.log('addOne', count);
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
    console.log('minusOne');
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
    console.log('reset');
};
// const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>
// );
// console.log(templateTwo);

// Challenge
// Make button "-1" setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function
var appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
// ReactDOM.render(templateTwo, appRoot);

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
