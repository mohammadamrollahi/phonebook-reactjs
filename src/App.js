import React,{useState} from 'react';
import logo from './logo.svg';
import RouterFooter from "./Components/RouterFooter/RouterFooter"
import FavoritesContainer from "./Components/FavoritesContainer/FavoritesContainer"
import CallContainer from "./Components/CallContainer/CallContainer"
import PhonbookContainer from "./Components/PhonebookContainer/PhonbookContainer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  const [dcontacts, setdcontacts] = useState([
    { id: 1, name: "Mohamad", lastname: "saberi", email:"mohammadamrollahi3@gmail.com",phone: "9124681237", img: "",favorite:false },
    { id: 2, name: "Alireza", lastname: "pashaei", email:"mohammadamrollahi3@gmail.com", phone: "9159463427", img: "" ,favorite:false},
    { id: 3, name: "Negar", lastname: "Mahdavi", email:"mohammadamrollahi3@gmail.com", phone: "9303752067", img: "" ,favorite:false},
    { id: 4, name: "Parviz", lastname: "bahrami", email:"mohammadamrollahi3@gmail.com", phone: "9206789203", img: "",favorite:false },
    { id: 5, name: "reza", lastname: "amrollahi", email:"mohammadamrollahi3@gmail.com", phone: "9145492736", img: "" ,favorite:false},
    { id: 6, name: "mahsa", lastname: "Akbari", email:"mohammadamrollahi3@gmail.com", phone: "9119723486", img: "" ,favorite:false},
    { id: 7, name: "sara", lastname: "Mahdavi", email:"mohammadamrollahi3@gmail.com", phone: "9600246783", img: "" ,favorite:false},
    { id: 8, name: "kian", lastname: "camaei", email:"mohammadamrollahi3@gmail.com", phone: "9706725198", img: "" ,favorite:false},
    { id: 9, name: "roya", lastname: "dakhili", email:"mohammadamrollahi3@gmail.com", phone: "9903050782", img: "" ,favorite:false},
    { id: 10, name: "arash", lastname: "Akbari", email:"mohammadamrollahi3@gmail.com", phone: "9023457896", img: "",favorite:false },
    { id: 11, name: "hossein", lastname: "fahimi", email:"mohammadamrollahi3@gmail.com", phone: "9600872619", img: "" ,favorite:false},
    { id: 12, name: "noushin", lastname: "Eshraghi", email:"mohammadamrollahi3@gmail.com", phone: "9301354376", img: "" ,favorite:false},
    { id: 13, name: "hossein", lastname: "golestani", email:"mohammadamrollahi3@gmail.com", phone: "9601347865", img: "" ,favorite:false},
    { id: 14, name: "matin", lastname: "hamedi", email:"mohammadamrollahi3@gmail.com", phone: "9304275631", img: "" ,favorite:false},
    { id: 15, name: "reza", lastname: "vahidi", email:"mohammadamrollahi3@gmail.com", phone: "9307895013", img: "",favorite:false },
    { id: 16, name: "nastaran", lastname: "zahraei", email:"mohammadamrollahi3@gmail.com", phone: "9302456078", img: "",favorite:false },
    { id: 17, name: "korosh", lastname: "yadollahi", email:"mohammadamrollahi3@gmail.com", phone: "9301045795", img: "",favorite:false },
    { id: 18, name: "zahra", lastname: "kamali", email:"mohammadamrollahi3@gmail.com", phone: "9301045795", img: "" ,favorite:false},
  ])
  const [showModal, setshowModal] = useState(false)
const [modalUser,setmodalUser]=useState({})

  const showCardModal=(user)=>{
    setshowModal(true)
    setmodalUser(user)
  }
  const favoriteCheck=(user)=>{
    setdcontacts([...dcontacts.map((item)=>{
      if(item.id==user.id)
      {
        if(item.favorite)
        item.favorite=false;
        else
        item.favorite=true;
        return item
      }else return item
    })])
    console.log(user)
  }
  return (
    <>
    <Router>
      <Switch>
        <Route path="/phonbook">
          <PhonbookContainer dcontacts={dcontacts} setdcontacts={setdcontacts} favoriteCheck={favoriteCheck} showModal={showModal} showCardModal={showCardModal} modalUser={modalUser}setshowModal={setshowModal} setmodalUser={setmodalUser}/>
        </Route>
        <Route path="/call">
          <CallContainer/>
        </Route>
        <Route path="/favorites">
          <FavoritesContainer dcontacts={dcontacts} setdcontacts={setdcontacts} favoriteCheck={favoriteCheck} showModal={showModal} showCardModal={showCardModal} modalUser={modalUser}setshowModal={setshowModal} setmodalUser={setmodalUser}/>
        </Route>
      </Switch>
    
    
    <RouterFooter/>
    </Router>
    </>
  );
}

export default App;
