import React from 'react'
import classes from './FilmItem.module.scss'

export const FilmItem = (props) => {
    return (
        <div className={classes.itemcontainer} >
            <img src={props.data.poster} />
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
        </div>
    )
}
