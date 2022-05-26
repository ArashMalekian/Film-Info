import React , {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAboutFilm } from '../../../redux/aboutfilm/aboutFilmAction';
import Carousel from 'react-elastic-carousel'
import classes from './AboutFilm.module.scss'

export const AboutFilm = (props) => {
    const params = useParams()
    const dispatch = useDispatch()
    const aboutFilmData = useSelector(state => state.aboutFilmState)
    useEffect( () => {
        dispatch(fetchAboutFilm(params.id))
        
      return () => {
        
      };
    }, [])
    return (
        <div>
            {
                aboutFilmData.loading ?
                <h1>loading . . . </h1> :
                aboutFilmData.error ?
                <h1>{aboutFilmData.error}</h1>:
                <div className={classes.aboutfilmcontainer} >
                    <h1>{aboutFilmData.data.id}</h1>
                    <div className={classes.poster} >
                    <img src={aboutFilmData.data.poster}  />
                    </div>
                    <h1>
                    {aboutFilmData.data.title}
                    </h1>
                        {/* {aboutFilmData.data.images.map(img => <img key={img} src={img} alt="img"  />)} */}
                        <div className={classes.infobox} >
                        <div className={classes.infoitem} >
                        <h5>{aboutFilmData.data.year}</h5>
                        </div>
                        <div  className={classes.infoitem}>
                        <h5>{aboutFilmData.data.released}    realeased</h5>
                        </div>
                        <div className={classes.infoitem}>
                        <h5>{aboutFilmData.data.runtime}</h5>
                        </div>
                        </div>
                        <ul className={classes.casts} >
                            <li> <h5> director :</h5> {aboutFilmData.data.director}</li>
                            <li> <h5> writer/s :</h5> {aboutFilmData.data.writer}</li>
                            <li> <h5> actors :</h5> {aboutFilmData.data.actors}</li>
                            <li id={classes.plot} > <h5>plot:</h5> {aboutFilmData.data.plot}</li>
                        </ul>
                        <ul className={classes.awardandscore} >
                            <li className={classes.awarditem} >  {aboutFilmData.data.awards}</li>
                            <ul>
                                <li> <h5> metascore :</h5> {aboutFilmData.data.metascore} </li>
                                <li> <h5> Imdb votes :</h5> {aboutFilmData.data.imdb_votes} </li>
                                <li> <h5> Imdb rating :</h5> {aboutFilmData.data.imdb_rating} </li>
                            </ul>
                        </ul>
                </div>
            }
        </div>
    )
}
