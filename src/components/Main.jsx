import React, { useState } from 'react'
import Content from './Content'
import './Main.css'

const Main = () => {

    const [id, setId] = useState(0)

    const inc = () => {
        if (id < 25) {
            setId((prevId) => prevId + 1)
        }
        console.log(id)
    }

    const dec = () => {
        if (id > 0) {
            setId((prevId) => prevId - 1)
        }
    }

    return (
        <div className="main">
            <div className="header">
            <h1>Home</h1>
            </div>
            <section>
                <Content id={id}/>
                <button onClick={dec}> Previos </button>      
                <button onClick={inc}> NEXT </button>
            </section>
        </div>
    )
}

export default Main
