import React from 'react'
import classes from './FilmItem.module.scss'
import { Link } from 'react-router-dom'


export const FilmItem = (props) => {
    return (
        <div className={classes.itemcontainer} >
            <Link to={`/${props.data.id}`} className={classes.link} >
            <img src={props.data.poster} alt={props.data.title} />
            <div className={classes.detailbox} >
            <h2>
                {props.data.id}
                -
            {props.data.title}
            </h2>
            <div>
                <p>
                {props.data.year}
                </p>
                <p>
                {props.data.country}
                </p>
            </div>
            <div className={classes.imdbbox} >
                <p>
                Imdb   
                </p>
                <p>
                {props.data.imdb_rating}
                </p>
            </div>
            </div>
        </Link>
        </div>
    )
}
