import axios from "axios"

const searchFilmRequest = () => {
    return{
        type : "REQUEST-SEARCH-FILM"
    }
}

const searchFilmSuccess = (info) => {
    return{
        type : "SEARCH-FILM-SUCCESS",
        payload : info
    }
}

const searchFilmFailure = (error) => {
    return{
        type : "SEARCH-FILM-FAILURE",
        payload : error
    }
}

export const getSearchedFilm = (name) => {
    return (dispatch) => {
        dispatch(searchFilmRequest())
        axios.get(`http://moviesapi.ir/api/v1/movies?q=${name}`)
        .then(
            response => { dispatch(searchFilmSuccess(response.data.data));
            console.log(response.data.data);}
        )
        .catch(error => dispatch(searchFilmFailure(error)))
    }
}
