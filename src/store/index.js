import { createStore,combineReducers,applyMiddleware,compose } from "redux";
// import loginReducer from './reducers/loginReducer';
import newsReducer from './reducers/newsReducer';
import globalReducer from './reducers/globalReducer';
import loginReducer from './reducers/loginReducer';

import thunk from 'redux-thunk';

const AllReducers = combineReducers({
    news: newsReducer ,
    globalVariable: globalReducer,
    login: loginReducer
})

const InitialState = {
    news: [],
    login: {
        email: "demo@collegify.com",
        password: "admin",
        isLogin: false,
        loginStatus: false
    },
    globalVariable: {
        loginModal: false,
        registerModal: false
    }
}

/*const InitialState = {
    login: {
        email: null,
        password: null,
        isLogin: false
    },
    register: {
        name: null,
        email: null,
        phone_number: null,
        address: null,
        age: null,
        sex: null
    },
    news: [],
    items: {
        name: null,
        description: null,
        addWishList: [],
    },
    filter: {
        byDate: null
    }
}*/

/*{
        description: null,
        like: null,
        dislike: null,
        date: null,
        category: null
    }*/

const middleWare = [thunk];


const store = createStore(AllReducers ,InitialState , compose(applyMiddleware(...middleWare) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//use apply middleWare thunk for async function in dispatcher from front end request.
// thunk middleware will take care of functional actions.

export default store;
