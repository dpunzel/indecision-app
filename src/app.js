console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
        <div>
            <h1>Indecision App</h1>
            <p>This is some info</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
        </div>
    );

    // Create a templateTwo var JSX expression
    // div element
    // h1 with my name
    // create a p tag with age: xx
    // create p tag location: xxxx
    // render templateTwo in stead of template one

var templateTwo = (
    <div>
        <h1>David Punzel</h1>
        <p>Age: 122</p>
        <p>Location: Kronos</p>
    </div>
);
var appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);