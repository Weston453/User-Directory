import React, {useState} from 'react'

const EditForm = ({ cards, setCards, index, setIndex }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [employer, setEmployer] = useState('')
    const [title, setTitle] = useState('')

    const [movie1, setMovie1] = useState('')
    const [movie2, setMovie2] = useState('')
    const [movie3, setMovie3] = useState('')

    //--------First/Last Name Input------------------------------
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    //City, Country, Employer, Title Input-----------------------
    const handleCity = (e) => {
        setCity(e.target.value)
    }

    const handleCountry = (e) => {
        setCountry(e.target.value)
    }

    const handleEmployer= (e) => {
        setEmployer(e.target.value)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    //Favorite Movie Input-------------------------------------
    const handleMovie1= (e) => {
        setMovie1(e.target.value)
    }

    const handleMovie2 = (e) => {
        setMovie2(e.target.value)
    }

    const handleMovie3 = (e) => {
        setMovie3(e.target.value)
    }


    //--------Form Submit Handler-----------------------------
    const handleSubmit = (e) => {
        e.preventDefault()
        setCards([ ...cards.splice(index, 0, 
            {
            id: 26,
            name: {first: firstName, last: lastName},
            city: city,
            country: country,
            employer: employer,
            title: title,
            favoriteMovies: [
                movie1, 
                movie2, 
                movie3
            ]
            }
        )])
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <h1>Edit Person</h1>
                <label>First Name: </label>
                <input 
                    type='text' 
                    value={firstName} 
                    onChange={handleFirstName}
                /><br/>
                <label>Last Name: </label>
                <input 
                    type='text' 
                    value={lastName} 
                    onChange={handleLastName}
                /><br/>
                <label>City: </label>
                <input 
                    type='text' 
                    value={city} 
                    onChange={handleCity}
                /><br/>
                <label>Country: </label>
                <input 
                    type='text' 
                    value={country} 
                    onChange={handleCountry}
                /><br/>
                <label>Employer: </label>
                <input 
                    type='text' 
                    value={employer} 
                    onChange={handleEmployer}
                /><br/>
                <label>Title: </label>
                <input 
                    type='text' 
                    value={title} 
                    onChange={handleTitle}
                /><br/>
                <label>Favorite Movie1: </label>
                <input 
                    type='text' 
                    value={movie1} 
                    onChange={handleMovie1}
                /><br/>
                <label>Favorite Movie2: </label>
                <input 
                    type='text' 
                    value={movie2} 
                    onChange={handleMovie2}
                /><br/>
                <label>Favorite Movie3: </label>
                <input 
                    type='text' 
                    value={movie3} 
                    onChange={handleMovie3}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default EditForm
