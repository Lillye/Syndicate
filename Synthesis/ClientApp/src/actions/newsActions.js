import { FETCH_NEWS } from './types';

export const fetchNews = () => dispatch => {
    let news = {};
    dispatch({
        type: FETCH_NEWS,
        payload: news
    });
};

