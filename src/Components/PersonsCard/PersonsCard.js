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
                        <img className="contactImg" src={"https://api.adorable.io/avatars/50/Ali@adorable.png" + Contacts.id} />
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