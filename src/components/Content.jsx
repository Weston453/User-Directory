import React from 'react'
import './Content.css'


const Content = ({ cards, setCards, index }) => {
    let card = cards[index]
    return (
        <div>
            <div className="card">
                <h1 className="index-counter">{card.id}/{cards.length}</h1>
                <h1 className="name">{card.name.first} {card.name.last} </h1>
                <section className="about">
                    <p><strong>From: </strong>{card.city}, {card.country}</p>
                    <p><strong>Job Title: </strong>{card.title}</p>
                    <p><strong>Employer: </strong>{card.employer}</p>
                </section>
                <h2>Favorite Movies:</h2>
                <ol>
                    <li>{card.favoriteMovies[0]}</li>
                    <li>{card.favoriteMovies[1]}</li>
                    <li>{card.favoriteMovies[2]}</li>
                </ol> 
            </div>
        </div>
    )
}

export default Content
