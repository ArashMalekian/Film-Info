import React , {useState , useContext} from 'react'
import { useDispatch } from 'react-redux'
import { statesHandlerContext } from '../../../context/StateHandlerContext'
import { getSearchedFilm } from '../../../redux/searchedFilm/searchedFilmAction'
import classes from './SearchFilm.module.scss'

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
    
    const closeHandler = () => {
        context.filmsShower()
    }
    return (
        <div>
            {
                context.partShower ?
            <h4 className={classes.searchbtn} onClick={searchHandler} >
                جست و جو کنید
            </h4> :
            <h4 className={classes.searchbtn} onClick={closeHandler} >
                بستن
            </h4>
            }
            <input type="text" value={search} onChange={changeHandler}  />
        </div>
    )
}
