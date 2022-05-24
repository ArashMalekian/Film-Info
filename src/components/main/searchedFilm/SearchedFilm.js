import React , {useContext} from 'react'
import { useSelector } from 'react-redux'
import { statesHandlerContext } from '../../../context/StateHandlerContext'
import { SearchedFilmItem } from './searchedFilmItem/SearchedFilmItem'

export const SearchedFilm = () => {
    const context = useContext(statesHandlerContext)
    const searchedFilm = useSelector(state => state.searchedFilmState)
    return (
        <div style={{width:"100%"}} >
        <div style={{width:"100%" , display:"flex" , alignItems:"center" , justifyContent:"center" , flexWrap:"wrap"}} >
            {
                searchedFilm.data.map(item => <SearchedFilmItem key={item.id} data={item} /> ) 
            }
        </div>
        <div onClick={context.filmsShower} >
            بستن
        </div>
        </div>
    )
}
