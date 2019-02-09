console.log('App.js is running!');

const app = {
    title: 'Visibility Toggle',
};

const appRoot = document.getElementById('app');

let visibility = false;
const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey you are seeing something now.</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();
