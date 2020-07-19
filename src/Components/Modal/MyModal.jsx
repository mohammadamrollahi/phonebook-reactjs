import React from 'react'
import "./modal.scss"
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import personsCard from "../PersonsCard/PersonsCard";
export default function MyModal(props) {
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          padding:"0px"
        }
      };
    return (
        <Modal
        
        isOpen={props.showModal}
        contentLabel="Minimal Modal Example"
        style={customStyles}>
          <div className="modalDiv">
            <div className="header">
              <p className="headertext">User information</p>
              <i onClick={()=>props.setshowModal(false)} className="fas fa-times closeicon"></i>
            </div>
             <div className="modalUserDiv">
               <div className="modalUserinnerDiv">
                <img className="userImg" src={props.modalUser.img}/>
                <p className="userinformationP">{props.modalUser.name +" "+ props.modalUser.lastname}</p>
                </div>
             </div>
             <div className="userphoneDiv">
               <div className="userphoneinnerDiv">
             <i class="fas fa-phone-alt phonicon"></i>
               <p className="phoneText">{props.modalUser.phone}</p>
             </div>
             </div>
             <div className="useremailDiv">
               <div className="useremailinnerDiv">
             <i class="fas fa-at emailicon"></i>
               <p className="emailText">{props.modalUser.email}</p>
               </div>
             </div>
             <div className="handlediv">
               <div className="handleinnerdiv">
                  <div className="handleButton">
                  <i class="far fa-edit handleicon"></i>
                   <p className="handletext"> edite</p>
                    </div>
                  <div className="handleButton ">
                  <i class="fas fa-trash-alt handleicon"></i>
                   <p className="handletext"> delete</p>
                    </div>
                </div>
             </div>
          </div>
</Modal>
    )
}
