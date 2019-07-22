export const FETCH_NEWS = 'FETCH_NEWS';

const fetch_news = (dispatch) => {
    //fetch call here
    fetch("http://www.mocky.io/v2/5d358c7156000056003a4e3b")
        .then(res => res.json())
        .then(res => dispatch({type: FETCH_NEWS , news: res}))
}

// const fetch_user = {type: FETCH_USER , payload: 'New user registered'}

export default fetch_news;
