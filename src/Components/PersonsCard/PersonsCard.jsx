import React, { Component } from 'react'
import "./PersonsCard.scss"
import "./randomColor.jsx"
export default function personsCard(props){


        const Contacts  = props.Contacts
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        return (
            <>
            <div onClick={()=>props.showCardModal()}  className="cardsContainer" >
                <div className="card">
                    <div className="imgdiv">  
                        <img className="contactImg" src={Contacts.img} />
                    </div>
                    <div className="informationdiv">
                        <p className="nameText">{Contacts.name + " " + Contacts.lastname}</p>
                        <p className="phoneText">{Contacts.phone}</p>
                    </div>
                </div>
            </div>

            </>
        )
    
}