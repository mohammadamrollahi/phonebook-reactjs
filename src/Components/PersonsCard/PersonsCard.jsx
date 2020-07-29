import React, { Component } from 'react'
import "./PersonsCard.scss"
export default function personsCard(props){


        const Contacts  = props.Contacts
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        return (
            <>
            <div   className="cardsContainer" >
                <div className="card" onClick={()=>props.showCardModal()}>
                    <div className="imgdiv">  
                        <img className="contactImg" src={Contacts.img} />
                    </div>
                    <div className="informationdiv">
                        <p className="nameText">{Contacts.name + " " + Contacts.lastname}</p>
                        <p className="phoneText">{Contacts.phone}</p>
                    </div>
                </div>
                <div className="favoritesIcondiv">
                <i className={`${Contacts.favorite?"fas":"far"} fa-star favoriteIcon`} onClick={()=>props.favoriteCheck()}></i>
               
                </div>
            </div>

            </>
        )
    
}