const initialState = {
    loading : false,
    data : [],
    error:""
}

export const aboutFilmReducer = (state = initialState , action) => {
    switch(action.type){
        case "GET-ABOUT-FILM" :
            return{
                ...state ,
                loading : true
            }
        case "ABOUT-FILM-SUCCESS" : 
            return{
                ...state ,
                loading : false,
                data : action.payload
            }
        case "ABOUT-FILM-FAILURE" :
            return{
                ...state , 
                loading : false,
                error : action.payload
            }
        default : return state;
    }
}
