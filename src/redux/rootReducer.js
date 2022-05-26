import  {combineReducers}  from 'redux'
import { aboutFilmReducer } from './aboutfilm/aboutFilmReducer'
import { filmsInformationReducer } from './filmsInformation/filmsInformationReducer'
import { searchedFilmReducer } from './searchedFilm/searchedFilmReducer'

export const rootReducer = combineReducers({
    filmInfosState : filmsInformationReducer,
    searchedFilmState : searchedFilmReducer,
    aboutFilmState : aboutFilmReducer,
})