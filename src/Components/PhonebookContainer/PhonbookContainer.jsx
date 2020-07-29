import React, {useState,useEffect} from "react";
import './PhonbookContainerStyles.scss'
import Header from '../Header/Header'
import PersonsCard from "../PersonsCard/PersonsCard";
import MyModal from "../Modal/MyModal"
import AddContactModal from "../addContactModal/AddContactModal"
import RouterFooter from "../RouterFooter/RouterFooter"
export default function PhonebookContainer() 
{
const [dcontacts, setdcontacts] = useState([
  { id: 1, name: "Mohamad", lastname: "saberi", email:"mohammadamrollahi3@gmail.com",phone: "9124681237", img: "" },
  { id: 2, name: "Alireza", lastname: "pashaei", email:"mohammadamrollahi3@gmail.com", phone: "9159463427", img: "" },
  { id: 3, name: "Negar", lastname: "Mahdavi", email:"mohammadamrollahi3@gmail.com", phone: "9303752067", img: "" },
  { id: 4, name: "Parviz", lastname: "bahrami", email:"mohammadamrollahi3@gmail.com", phone: "9206789203", img: "" },
  { id: 5, name: "reza", lastname: "amrollahi", email:"mohammadamrollahi3@gmail.com", phone: "9145492736", img: "" },
  { id: 6, name: "mahsa", lastname: "Akbari", email:"mohammadamrollahi3@gmail.com", phone: "9119723486", img: "" },
  { id: 7, name: "sara", lastname: "Mahdavi", email:"mohammadamrollahi3@gmail.com", phone: "9600246783", img: "" },
  { id: 8, name: "kian", lastname: "camaei", email:"mohammadamrollahi3@gmail.com", phone: "9706725198", img: "" },
  { id: 9, name: "roya", lastname: "dakhili", email:"mohammadamrollahi3@gmail.com", phone: "9903050782", img: "" },
  { id: 10, name: "arash", lastname: "Akbari", email:"mohammadamrollahi3@gmail.com", phone: "9023457896", img: "" },
  { id: 11, name: "hossein", lastname: "fahimi", email:"mohammadamrollahi3@gmail.com", phone: "9600872619", img: "" },
  { id: 12, name: "noushin", lastname: "Eshraghi", email:"mohammadamrollahi3@gmail.com", phone: "9301354376", img: "" },
  { id: 13, name: "hossein", lastname: "golestani", email:"mohammadamrollahi3@gmail.com", phone: "9601347865", img: "" },
  { id: 14, name: "matin", lastname: "hamedi", email:"mohammadamrollahi3@gmail.com", phone: "9304275631", img: "" },
  { id: 15, name: "reza", lastname: "vahidi", email:"mohammadamrollahi3@gmail.com", phone: "9307895013", img: "" },
  { id: 16, name: "nastaran", lastname: "zahraei", email:"mohammadamrollahi3@gmail.com", phone: "9302456078", img: "" },
  { id: 17, name: "korosh", lastname: "yadollahi", email:"mohammadamrollahi3@gmail.com", phone: "9301045795", img: "" },
  { id: 18, name: "zahra", lastname: "kamali", email:"mohammadamrollahi3@gmail.com", phone: "9301045795", img: "" },
])
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

const [showModal, setshowModal] = useState(false)
const [modalUser,setmodalUser]=useState({})

  const showCardModal=(user)=>{
    setshowModal(true)
    setmodalUser(user)
  }
    let alphabets = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
      <>
      
      
        <Header Contacts={dcontacts} showCardModal={showCardModal} />
        {alphabets.map((letter) => (
          <div className="alphabetDiv">
            <p className="alphabetP">{letter}</p>
            {dcontacts.filter(item => (item.lastname.startsWith(letter))  || (item.lastname.toLowerCase().startsWith(letter))).map((filtredItem) =>
              <>
                <PersonsCard Contacts={filtredItem} showCardModal={()=>showCardModal(filtredItem)}/>
                
              </>
            )}
            
          </div>
        ))}

       <MyModal dcontacts={dcontacts} setdcontacts={setdcontacts} showModal={showModal} setshowModal={()=>setshowModal()} modalUser={modalUser} setmodalUser={()=>setmodalUser()}/>
        <AddContactModal dcontacts={dcontacts} setdcontacts={setdcontacts} setimg={setimg}/>
        <RouterFooter/>
      </>)}
      