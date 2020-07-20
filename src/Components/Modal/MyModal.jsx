import React, { useState, useEffect } from "react";
import "./modal.scss";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import personsCard from "../PersonsCard/PersonsCard";
import SweetAlert from "sweetalert2-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function MyModal(props) {
  const [showDelelteModal, setshowDelelteModal] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
    },
  };
  const deleteFunc = (myid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        props.setshowModal(false);
        props.setdcontacts([
          ...props.dcontacts.filter((item) => item.id != myid),
        ]);
      }
    });
  };
  const editeFunc = (myid) => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Next &rarr;",
      showCancelButton: true,
      progressSteps: ["1", "2", "3", "4"],
    })
      .queue([
        {
          title: "name",
          text: "edite contact name",
        },
        "lastname",
        "number",
        "email",
      ])
      .then((result) => {
        if (result.value) {
          let myanswers = result.value;

          props.setdcontacts([
            ...props.dcontacts.map((item) => {
              if (item.id == myid) {
                item.name = myanswers[0];
                item.lastname = myanswers[1];
                item.phone = myanswers[2];
                item.email = myanswers[3];
                return item;
              } else return item;
            }),
          ]);
          Swal.fire({
            title: "All done!",
            confirmButtonText: "Lovely!",
          });
        }
      });
  };
  return (
    <Modal
      isOpen={props.showModal}
      contentLabel="Minimal Modal Example"
      style={customStyles}
    >
      <div className="modalDiv">
        <div>
          <div className="header">
            <p className="headertext">User information</p>
            <i
              onClick={() => props.setshowModal(false)}
              className="fas fa-times closeicon"
            ></i>
          </div>
          <div className="modalUserDiv">
            <div className="modalUserinnerDiv">
              <img className="userImg" src={props.modalUser.img} />
              <p className="userinformationP">
                {props.modalUser.name + " " + props.modalUser.lastname}
              </p>
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
        </div>
        <div className="handlediv">
          <div className="handleinnerdiv">
            <div
              onClick={() => editeFunc(props.modalUser.id)}
              className="handleButton"
            >
              <i class="far fa-edit handleicon"></i>
              <p className="handletext"> edite</p>
            </div>
            <div
              onClick={() => deleteFunc(props.modalUser.id)}
              className="handleButton "
            >
              <i class="fas fa-trash-alt handleicon"></i>
              <p className="handletext"> delete</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
