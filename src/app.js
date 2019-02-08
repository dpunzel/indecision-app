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
let count = 0;
const addOne = () => {
    console.log('addOne');
};
const minusOne = () => {
    console.log('minusOne');
};
const reset = () => {
    console.log('reset')
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);
console.log(templateTwo);

// Challenge
// Make button "-1" setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function
const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
ReactDOM.render(templateTwo, appRoot);