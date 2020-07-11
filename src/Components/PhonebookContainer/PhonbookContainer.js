import React, { Component } from "react";
import './PhonbookContainerStyles.scss'
import Header from '../Header/Header'
import PersonsCard from '../PersonsCard/PersonsCard'
export default class PhonebookContainer extends Component {

  render() {
    return (
      <div>
              <Header/>
      <PersonsCard/>
      </div>

    )

      
  }
}
