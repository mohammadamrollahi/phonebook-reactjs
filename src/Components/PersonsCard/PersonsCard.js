import React, { Component } from 'react'
import "./PersonsCard.scss"
import "./randomColor.js"
export default class personsCard extends React.Component {

    render() {
        const { Contacts } = this.props
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        return (
            <>
    
            <div className="cardsContainer">

                <div className="card">
                    <div className="imgdiv">
                        
                        <img className="contactImg" src={"https://ui-avatars.com/api/?name=" + Contacts.name+"+"+Contacts.lastname+"&background="+randomColor+"&color=fff"+"&size=50"} />
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
}