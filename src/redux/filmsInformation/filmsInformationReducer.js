const initialState = {
    loading : false,
    data : [],
    error:""
}

export const filmsInformationReducer = (state = initialState , action) => {
    switch(action.type){
        case "GET-FILM-INFORMATION" :
            return{
                ...state ,
                loading : true
            }
        case "FILM-INFORMATION-SUCCESS" : 
            return{
                ...state ,
                loading : false,
                data : action.payload
            }
        case "FILM-INFORMATION-FAILURE" :
            return{
                ...state , 
                loading : false,
                error : action.payload
            }
        default : return state;
    }
}
