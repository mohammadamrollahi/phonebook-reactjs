import React, { Component } from 'react'
import './Header.scss'
import PersonsCard from "../PersonsCard/PersonsCard"
import "./Headerjs.js"
export default class Headers extends React.Component {
    state = {
        search: null,
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ search: value })
    }
    render() {
        const { search } = this.state
        const { Contacts } = this.props
        let filterd = Contacts.filter(item => (item.name.toLowerCase().startsWith(search) || item.phone.startsWith(search)))
        return (
            <>
                <div id="navbar">
                    <div className="search-div">
                        <i id="searchIcon" className="fas fa-search"></i>
                        <input type="text" placeholder="search" name="search" className="searchInput" onChange={this.handleChange} />
                    </div>
                    <div className="navbarIcons-div">
                        <i id="navbarIcon" className="fas fa-bell"></i>
                        <p className="navbarIcon-number">21</p>
                        <i id="navbarIcon" className="fas fa-comment-alt"></i>
                        <p className="navbarIcon-number">38</p>
                    </div>
                    <div className="searchShow">
                        {this.state.search !== '' &&
                            filterd.map((item) => (
                                <PersonsCard key={item.id} Contacts={item} />
                            ))}
                    </div>
                </div>
            </>
        )
    }
}
