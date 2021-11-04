const EditForm = ({ cards, setCards, index, setIndex, setShowEditForm }) => {
    let card = cards[index]

    //--------First/Last Name Input------------------------------
    const handleFirstName = (e) => {
        e.preventDefault()
        card.name.first = e.target.value
    }

    const handleLastName = (e) => {
        e.preventDefault()
        card.name.last = e.target.value
    }

    //City, Country, Employer, Title Input-----------------------
    const handleCity = (e) => {
        e.preventDefault()
        card.city = e.target.value
    }

    const handleCountry = (e) => {
        e.preventDefault()
        card.country = e.target.value
    }

    const handleEmployer= (e) => {
        e.preventDefault()
        card.employer = e.target.value
    }

    const handleTitle = (e) => {
        e.preventDefault()
        card.title = e.target.value
    }

    //Favorite Movie Input-------------------------------------
    const handleMovie1= (e) => {
        e.preventDefault()
        card.favoriteMovies[0] = e.target.value
    }

    const handleMovie2 = (e) => {
        e.preventDefault()
        card.favoriteMovies[1] = e.target.value
    }

    const handleMovie3 = (e) => {
        e.preventDefault()
        card.favoriteMovies[2] = e.target.value
    }

    //-------Hide Edit Form-------------------------------------
    const hideForm = (e) => {
        setShowEditForm(false)
    }

    return (
        <form>
            <div>
            <h1>Edit Person</h1>
                <label>First Name: </label>
                <input 
                    type='text' 
                    placeholder={card.name.first}
                    onChange={handleFirstName}
                /><br/>
                <label>Last Name: </label>
                <input 
                    type='text' 
                    placeholder={card.name.last}
                    onChange={handleLastName}
                /><br/>
                <label>City: </label>
                <input 
                    type='text' 
                    placeholder={card.city} 
                    onChange={handleCity}
                /><br/>
                <label>Country: </label>
                <input 
                    type='text' 
                    placeholder={card.country}
                    onChange={handleCountry}
                /><br/>
                <label>Job Title: </label>
                <input 
                    type='text' 
                    placeholder={card.title} 
                    onChange={handleTitle}
                /><br/>
                <label>Employer: </label>
                <input 
                    type='text' 
                    placeholder={card.employer}
                    onChange={handleEmployer}
                /><br/>
                <label>Favorite Movie1: </label>
                <input 
                    type='text' 
                    placeholder={card.favoriteMovies[0]} 
                    onChange={handleMovie1}
                /><br/>
                <label>Favorite Movie2: </label>
                <input 
                    type='text' 
                    placeholder={card.favoriteMovies[1]} 
                    onChange={handleMovie2}
                /><br/>
                <label>Favorite Movie3: </label>
                <input 
                    type='text' 
                    placeholder={card.favoriteMovies[2]} 
                    onChange={handleMovie3}
                />
            </div><br/>
            <button type="submit" onClick={hideForm}>Submit</button>
            <button type="submit" onClick={hideForm}>Hide</button>
        </form>
    )
}

export default EditForm
