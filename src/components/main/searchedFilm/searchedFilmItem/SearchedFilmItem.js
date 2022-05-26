import React from 'react'
import { Link } from 'react-router-dom'
import classes from './SearchedFilmItem.module.scss'

export const SearchedFilmItem = (props) => {
    return (
        <div className={classes.itemcontainer} >
            <Link to={`/${props.data.id}`} className={classes.link} >
            <img src={props.data.poster} alt={props.data.title} />
            <div className={classes.detailbox} >
            <h2>
            {props.data.title}
            </h2>
            <div>
                {props.data.year}
                {props.data.country}
            </div>
            <div>
                Imdb
                {props.data.imdb_rating}
            </div>
            </div>
            </Link>
        </div>
    )
}
