import React, { useState } from 'react'
import data from '../data';
import Content from './Content'
import Form from './Form';
import EditForm from '../EditForm';
import './Main.css'

const Main = () => {
    const [cards, setCards] = useState(data)
    const [index, setIndex] = useState(0)
    const [showForm, setShowForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    
    //----Sort through Cards--------------------------------------
    const inc = () => {
        if( index + 1 < cards.length ) {
            setIndex((prevIndex) => prevIndex + 1)
        } else {
            alert("You've Reached the End")
        }
        console.log(index)
    }

    const dec = () => {
        if ( index < 1 ) {
            alert("You're at the Begining")
        } else{
            setIndex((prevIndex) => prevIndex - 1)
        }
        console.log(index)
    }

    //-----Delete Card------------------------------------------------
    const removeCard = (index) => {
        let cardsCopy = [...cards]
        cardsCopy.splice(index, 1)
        setCards(cardsCopy)
    }

    //-----Show Add-Card Form------------------------------------------
    function addForm(e) {
        setShowForm(true);
    }

    //-----Edit-Card---------------------------------------------------

    const addEdit = () => {
        setShowEditForm(true)
    }

    return (
        <div className="main">
            <div className="header">
            <h1>Home</h1>
            </div>
            <section className="background">
                <div className="content">
                    <Content index={index} cards={cards} setCards={setCards}/>
                </div>
                <section className="btn-sec">
                <button className="prev-btn" onClick={dec}> &lt; Previous </button>
                <button className="func-btn" onClick={addEdit}> Edit </button>      
                <button className="func-btn" onClick={removeCard}> Delete </button>      
                <button className="func-btn" onClick={addForm}> Add </button>     
                <button className="next-btn" onClick={inc}> Next &gt;</button><br/><br/>
                </section>
                {showForm && <Form cards={cards} setCards={setCards} />}
                {showEditForm && <EditForm cards={cards} setCards={setCards} index={index} setIndex={setIndex}/>}
            </section>
        </div>
    )
}

export default Main
