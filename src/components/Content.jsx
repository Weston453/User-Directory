import React from 'react'
import data from '../data'
import './Content.css'


const Content = (props) => {
    return (
        <div>
            <h2>{data[props.id].id}/25</h2>
            <h1>
                {data[props.id].name.first} {data[props.id].name.last}
            </h1>
            <p>
                From: {data[props.id].city}
                Job Title: {data[props.id].country}
                Employer: {data[props.id].title}
            </p>
            <h2>Favorite Movies:</h2>
            <ol>
                <li>{data[props.id].favoriteMovies[0]}</li>
                <li>{data[props.id].favoriteMovies[1]}</li>
                <li>{data[props.id].favoriteMovies[2]}</li>
            </ol>
        </div>
    )
}

export default Content
