import React, { Component } from "react";
import Modal from "react-modal";

import "./style.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderColor: "rgba(133, 77, 243,0.75)"
  }
};

class AddBooks extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#854df3";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button className="open-modal" onClick={this.openModal}>
          Ajouter
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2
            className="modal-title"
            ref={subtitle => (this.subtitle = subtitle)}
          >
            Ajouter un livre
          </h2>
          <form>
            <div className="modal-input">
              <label>Titre</label>
              <input />
              <label>Auteur</label>
              <input />
              <label>Editeur</label>
              <input />
              <label>Pays</label>
              <input />
              <label>Genre</label>
              <input />
              <label>Nb de Pages</label>
              <input />
              <label>Note</label>
              <input />
              <label>Lu en</label>
              <input />
            </div>
            <div className="center-button">
              <button className="modal-button" onClick={this.closeModal}>
                Ajouter
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddBooks;
