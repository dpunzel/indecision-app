console.log('App.js is running!');

// create app object title/subtitle
// user title/subtitle in the template
// render template
var app = {
    title: 'The Indecision App',
    subtitle: 'Some random content'
};

// JSX - JavaScript XML
var template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
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
var user = {
    name: 'David',
    age: 125,
    location: 'Kronos'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}
var userName = 'David';
var userAge = 126;
var userLocation = 'Kronos';
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);
var appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(templateTwo, appRoot);