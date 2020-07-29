import React, { useState } from "react";
import "./Header.scss";
import PersonsCard from "../PersonsCard/PersonsCard";
import "./Headerjs.js";
export default function Headers(props) {
  const [search, setsearch] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setsearch(value);
  };

  const Contacts = props.Contacts;
  let filterd = Contacts.filter(
    (item) =>
      item.lastname.toLowerCase().startsWith(search) ||
      item.phone.startsWith(search) ||
      item.name.toLowerCase().startsWith(search)
  );

  return (
    <>
      <div id="navbar">
        <div className="search-div">
          <i id="searchIcon" className="fas fa-search"></i>
          <input
            type="text"
            placeholder="search"
            name="search"
            className="searchInput"
            onChange={handleChange}
          />
        </div>
        <div className="navbarIcons-div">
          <i id="navbarIcon" className="fas fa-bell"></i>
          <p className="navbarIcon-number">21</p>
          <i id="navbarIcon" className="fas fa-comment-alt"></i>
          <p className="navbarIcon-number">38</p>
        </div>
        <div  className="searchShow">
          {search !== "" &&
            filterd.map((item) => (
              <PersonsCard
                key={item.id}
                Contacts={item}
                showCardModal={() => props.showCardModal(item)}
              />
            ))}
        </div>
      </div>
    </>
  );
}
