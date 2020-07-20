import React from "react";
import "./addContactModal.scss";
import Swal from "sweetalert2";
function AddContactModal(props) {
  const addHandler = () => {
    console.log(props.dcontacts);
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
            ...props.dcontacts,
            {
              id: Date.now(),
              name: myanswers[0],
              lastname: myanswers[1],
              phone: myanswers[2],
              email: myanswers[3],
              img: "",
            },
          ]);
          Swal.fire({
            title: "All done!",
            confirmButtonText: "Lovely!",
          });
        }
      });
  };

  return (
    <div
      onClick={() => addHandler()}
      className="addbutton"
      alt="add new contacts"
    >
      <i class="fas fa-plus plusicon"></i>
    </div>
  );
}

export default AddContactModal;
