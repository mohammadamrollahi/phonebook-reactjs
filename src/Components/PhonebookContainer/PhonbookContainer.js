import React, { Component } from "react";
import './PhonbookContainerStyles.scss'
import Header from '../Header/Header'
import PersonsCard from "../PersonsCard/PersonsCard";
import mySort from "./sortObjects"
export default class PhonebookContainer extends Component {
  state = {
    dcontacts: [
      { id: 1, name: "Mohammad", lastname: "Amrollahi", phone: "9124681237", img: "" },
      { id: 2, name: "Alireza", lastname: "Akbari", phone: "9159463427", img: "" },
      { id: 3, name: "Negar", lastname: "Mahdavi", phone: "9303752067", img: "" },
      { id: 4, name: "Parviz", lastname: "bahrami", phone: "9206789203", img: "" },
      { id: 5, name: "reza", lastname: "amrollahi", phone: "9145492736", img: "" },
      { id: 6, name: "mahsa", lastname: "Akbari", phone: "9119723486", img: "" },
      { id: 7, name: "sara", lastname: "Mahdavi", phone: "9600246783", img: "" },
      { id: 8, name: "kian", lastname: "camaei", phone: "9706725198", img: "" },
      { id: 9, name: "roya", lastname: "dakhili", phone: "9903050782", img: "" },
      { id: 10, name: "arash", lastname: "Akbari", phone: "9023457896", img: "" },
      { id: 11, name: "hossein", lastname: "fahimi", phone: "9600872619", img: "" },
      { id: 12, name: "noushin", lastname: "Eshraghi", phone: "9301354376", img: "" },
      { id: 13, name: "hossein", lastname: "golestani", phone: "9601347865", img: "" },
      { id: 14, name: "matin", lastname: "hamedi", phone: "9304275631", img: "" },
      { id: 15, name: "reza", lastname: "vahidi", phone: "9307895013", img: "" },
      { id: 16, name: "nastaran", lastname: "zahraei", phone: "9302456078", img: "" },
      { id: 17, name: "korosh", lastname: "yadollahi", phone: "9301045795", img: "" },
      { id: 17, name: "zahra", lastname: "asdollahi", phone: "9301045795", img: "" },
    ]
  }


  render() {
    const { dcontacts } = this.state
    let contacts = mySort(dcontacts)
    let arry = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
      <>
        <Header Contacts={contacts.map((item) => (item))} />
        {arry.map((h) => (
          <div className="alphabetDiv">
            <p className="alphabetP">{h}</p>
            {dcontacts.filter(item => (item.lastname.startsWith(h))  || (item.lastname.toLowerCase().startsWith(h))).map((k) =>
              <>
                {console.log(k.lastname)}
               
                <PersonsCard Contacts={k} />
              </>
            )}
          </div>
        ))}
      </>)}}