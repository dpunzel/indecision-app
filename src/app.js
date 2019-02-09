console.log('App.js is running!');

const app = {
    title: 'The Indecision App',
    subtitle: 'Some random content',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];
const render = () => {
// JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {/*<p>{app.subtitle}</p>*/}
            <p>{app.options.length > 0 ? 'Here are your options' + ' ' + app.options: 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            {/*{*/}
                {/*numbers.map((number) => {*/}
                    {/*return <p key={number}>Number: {number}</p>;*/}
                {/*})*/}
            {/*}*/}
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>Option: {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();