import React, { Component } from "react";
import './PhonbookContainerStyles.scss'
import Header from '../Header/Header'
import PersonsCard from "../PersonsCard/PersonsCard";
import mySort from"./sortObjects"
export default class PhonebookContainer extends Component {
  state = {
    dcontacts: [
      { id: 1, name: "Mohammad", lastname: "Amrollahi", phone: "9125555", img: "" },
      { id: 2, name: "Alireza", lastname: "Akbari", phone: "91500000", img: "" },
      { id: 3, name: "Negar", lastname: "Mahdavi", phone: "9307376575", img: "" },
      { id: 4, name: "Parviz", lastname: "Eshraghi", phone: "9207376575", img: "" },
      { id: 5, name: "reza", lastname: "Amrollahi", phone: "914525555", img: "" },
      { id: 6, name: "mahsa", lastname: "Akbari", phone: "91100000", img: "" },
      { id: 7, name: "sara", lastname: "Mahdavi", phone: "9607376575", img: "" },
      { id: 8, name: "kian", lastname: "Eshraghi", phone: "9707376575", img: "" },
      { id: 9, name: "roya", lastname: "Amrollahi", phone: "99025555", img: "" },
      { id: 10, name: "arash", lastname: "Akbari", phone: "90200000", img: "" },
      { id: 11, name: "hossein", lastname: "Mahdavi", phone: "9607376575", img: "" },
      { id: 12, name: "matin", lastname: "Eshraghi", phone: "930376575", img: "" },
      ]
      }


  render() {
    const { dcontacts } = this.state

    let contacts=mySort(dcontacts)
    return (
      <div>
        <Header Contacts={contacts.map((item) => (item))} />
        <div className="letters"></div>
     
        {contacts.map((item) => (
          <PersonsCard key="item.id" Contacts={item} />
        ))}
 </div>
    )
  }
}
