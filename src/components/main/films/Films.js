import React , {useEffect , useContext} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { fetchFilmsInformation } from '../../../redux/filmsInformation/filmsInformationAction'
import { FilmItem } from './filmItem/FilmItem'
import {statesHandlerContext} from "../../../context/StateHandlerContext"
import { SearchedFilm } from '../searchedFilm/SearchedFilm'

export const Films = () => {
    const context = useContext(statesHandlerContext)
    const dispatch = useDispatch()
    const filmData = useSelector(state => state.filmInfosState)
    useEffect(() => {
        dispatch(fetchFilmsInformation(2))
      return () => {
      };
    }, [])
    return (
        <>
        {
            context.partShower ? 
        <div style={{width:"100%"  , flexWrap:"wrap" , display:"flex"  , alignItems:"center" , justifyContent:"center"}} >
        {
            filmData.loading ?
            <h1>loading ...</h1> :
            filmData.error ?
            <h2>{filmData.error}</h2> :
            filmData.data.map(item => <FilmItem data={item} key={item.id} />  )
        }
        </div> 
        :
        <SearchedFilm />
        }
        </>
    )
}
