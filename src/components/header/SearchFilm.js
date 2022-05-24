import React , {useState , useContext} from 'react'
import { useDispatch } from 'react-redux'
import { statesHandlerContext } from '../../context/StateHandlerContext'
import { getSearchedFilm } from '../../redux/searchedFilm/searchedFilmAction'

export const SearchFilm = () => {
    const context = useContext(statesHandlerContext)
    const dispatch = useDispatch()
    const [search, setSearch] = useState()
    const changeHandler = (e) => {
        setSearch(e.target.value)
    }
    const searchHandler = () => {
        dispatch(getSearchedFilm(search));
        context.searchedShower()
    }
    return (
        <div>
            <h4 onClick={searchHandler} >
                جست و جو کنید
            </h4>
            <input type="text" value={search} onChange={changeHandler}  />
        </div>
    )
}
