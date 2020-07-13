import React, { Component } from 'react'
import "./PersonsCard.scss"
export default class personsCard extends React.Component {

    render() {
        const { Contacts } = this.props
        return (
            <>
            

            <div className="cardsContainer">

                <div className="card">
                    <div className="imgdiv">
                        <img className="contactImg" src={"https://ui-avatars.com/api/?name=" + Contacts.name+"+"+Contacts.lastname} />
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