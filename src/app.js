console.log('App.js is running!');

const app = {
    title: 'The Indecision App',
    subtitle: 'Some random content',
    options: ['One', 'Two']
};

// JSX - JavaScript XML
const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {/*<p>{app.subtitle}</p>*/}
            <p>{app.options.length > 0 ? 'Here are your options' + ' ' + app.options: 'No options'}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
        </div>
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
const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(template, appRoot);