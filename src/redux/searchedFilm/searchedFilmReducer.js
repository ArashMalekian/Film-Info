const initaiState = {
    loading : false,
    data:[],
    error:""
}

export const searchedFilmReducer = (state = initaiState , action) => {
    switch (action.type){
        case "REQUEST-SEARCH-FILM" :
            return {
                ...state ,
                loading:true
            }
        case "SEARCH-FILM-SUCCESS" :
            return {
                ...state ,
                loading :false,
                data:action.payload
            }
        case "SEARCH-FILM-FAILURE" :
            return {
                ...state ,
                loading:false,
                error : action.payload
            }
        default : return state
    }
}