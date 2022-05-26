import axios from 'axios'

const aboutFilmGetter = () => {
    return{
        type : "GET-ABOUT-FILM"
    }
}

const aboutFilmSuccess = (data) => {
    return{
        type : "ABOUT-FILM-SUCCESS",
        payload : data
    }
}

const aboutFilmFailure = (error) => {
    return{
        type : "ABOUT-FILM-FAILURE",
        payload : error
    }
}

export const fetchAboutFilm = (i) => {
    return (dispatch) => {
        dispatch(aboutFilmGetter())
        // for(let i = 1 ; i>6 ; i++){
            axios.get(`http://moviesapi.ir/api/v1/movies/${i}`)
            .then(Response =>{ dispatch(aboutFilmSuccess(Response.data))
            })
            .catch(error => dispatch(aboutFilmFailure(error)))
        // }
    }
}