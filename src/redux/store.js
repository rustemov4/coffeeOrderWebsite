import { createStore } from "redux";
import reducers from "./reducers";
function saveToLocalStorage(store) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('newCart', serializedStore);
    } catch(e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        
        const serializedStore = window.localStorage.getItem('newCart');
        if(serializedStore === null) return undefined;
        
        return JSON.parse(serializedStore);
    } catch(e) {
        console.log(e);
        return undefined;
    }
}
const persistedState = loadFromLocalStorage();


const store = createStore(reducers,persistedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;