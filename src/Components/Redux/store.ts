import {combineReducers, createStore} from "redux";
import {CounterReducer} from "./CounterReducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: CounterReducer,
})
let preloadedState;
const persistedTodosString = localStorage.getItem('app-state')

if (persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}

// непосредственно создаём store
export const store = createStore(rootReducer,preloadedState);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;