import { FETCH_NEWS } from '../action/newsAction';

const newsReducer = (state = {} , {type , list}) => {

    switch(type){
        case FETCH_NEWS:
            return state.news.list
        default:
            return state
    }


}

export default newsReducer;
