import  {combineReducers}  from 'redux'
import { filmsInformationReducer } from './filmsInformation/filmsInformationReducer'
import { searchedFilmReducer } from './searchedFilm/searchedFilmReducer'

export const rootReducer = combineReducers({
    filmInfosState : filmsInformationReducer,
    searchedFilmState : searchedFilmReducer,
})