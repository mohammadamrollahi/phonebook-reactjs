import React, {useState,useEffect} from "react";
import './PhonbookContainerStyles.scss'
import Header from '../Header/Header'
import PersonsCard from "../PersonsCard/PersonsCard";
import MyModal from "../Modal/MyModal"
import AddContactModal from "../addContactModal/AddContactModal"
import RouterFooter from "../RouterFooter/RouterFooter"
export default function PhonebookContainer({dcontacts,setdcontacts,showModal,showCardModal,modalUser,setshowModal,setmodalUser,favoriteCheck}) 
{

const setimg=()=>{
  const setprofiletypographi=(dcontacts)=>{
    let newcontacts=[...dcontacts]
    newcontacts.map((item)=>{item["img"]="https://ui-avatars.com/api/?name=" + item.name+"+"+item.lastname+
    "&background="+Math.floor(Math.random()*16777215).toString(16)+"&color=fff"+"&size=50"})
    setdcontacts(newcontacts)
  }
setprofiletypographi(dcontacts)
}
useEffect(() => {
setimg()

}, [])



    let alphabets = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
      <>
        <Header Contacts={dcontacts} showCardModal={showCardModal} />
        {alphabets.map((letter) => (
          <div className="alphabetDiv">
            <p className="alphabetP">{letter}</p>
            {dcontacts.filter(item => (item.lastname.startsWith(letter))  || (item.lastname.toLowerCase().startsWith(letter))).map((filtredItem) =>
              <>
                <PersonsCard Contacts={filtredItem} showCardModal={()=>showCardModal(filtredItem)} favoriteCheck={()=>favoriteCheck(filtredItem)}/>
                
              </>
            )}
            
          </div>
        ))}

       <MyModal dcontacts={dcontacts} setdcontacts={setdcontacts} showModal={showModal} setshowModal={()=>setshowModal()} modalUser={modalUser} setmodalUser={()=>setmodalUser()}/>
        <AddContactModal dcontacts={dcontacts} setdcontacts={setdcontacts} setimg={setimg}/>
      </>)}
      