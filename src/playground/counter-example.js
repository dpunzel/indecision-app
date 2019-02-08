let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('addOne', count);
};
const minusOne = () => {
    count--;
    renderCounterApp();
    console.log('minusOne');
};
const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('reset')
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
const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
// ReactDOM.render(templateTwo, appRoot);

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();