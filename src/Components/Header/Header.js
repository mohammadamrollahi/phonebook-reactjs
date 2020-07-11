import React,{Component} from 'react'
import './Header.scss'
export default class Headers extends React.Component{
    render(){
        return(
            <div className="HeaderContainer">
                <h2>Contacts</h2>
                <div>
                <input type="text" placeholder="search" name="search" className="search-input" onChange="this.handleChange"/>
                <i className="fas fa-search"></i>
                </div>
                
          </div>
        )
    }
}