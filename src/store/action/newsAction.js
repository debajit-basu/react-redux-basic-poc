export const FETCH_NEWS = 'FETCH_NEWS';

const fetch_news = (dispatch) => {
    //fetch call here
    fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then(res => dispatch({type: FETCH_NEWS , list: res.data}))
}

// const fetch_user = {type: FETCH_USER , payload: 'New user registered'}

export default fetch_news;
