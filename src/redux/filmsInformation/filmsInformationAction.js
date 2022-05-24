import axios from 'axios'

const filmInformationGetter = () => {
    return{
        type : "GET-FILM-INFORMATION"
    }
}

const filmInformationSuccess = (data) => {
    return{
        type : "FILM-INFORMATION-SUCCESS",
        payload : data
    }
}

const filmInformationFailure = (error) => {
    return{
        type : "FILM-INFORMATION-FAILURE",
        payload : error
    }
}

export const fetchFilmsInformation = (i) => {
    return (dispatch) => {
        dispatch(filmInformationGetter())
        // for(let i = 1 ; i>6 ; i++){
            axios.get(`http://moviesapi.ir/api/v1/movies?page=${i}`)
            .then(Response => dispatch(filmInformationSuccess(Response.data.data)))
            .catch(error => dispatch(filmInformationFailure(error)))
        // }
    }
}