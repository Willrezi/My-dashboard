import React, { Component } from "react";
import Modal from "react-modal";
import Cookies from "js-cookie";
import { withRouter } from "react-router-dom";

import "./style.css";
import axios from "axios";

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

Modal.setAppElement("#root");
class AddBooks extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      title: "",
      author: "",
      editor: "",
      country: "",
      genre: "",
      pages: "",
      note: "",
      read: "",
      token: Cookies.get("token")
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

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    const {
      title,
      author,
      editor,
      country,
      genre,
      pages,
      note,
      read
    } = this.state;

    axios
      .post(
        "http://localhost:3100/api/book/add",
        {
          title: title,
          author: author,
          editor: editor,
          country: country,
          genre: genre,
          pages: pages,
          note: note,
          read: read
        },
        {
          headers: { authorization: "Bearer " + this.state.token }
        }
      )
      .then(response => {
        console.log(response.data);
        this.closeModal();
        // this.props.history.push("/home");
      });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <button className="open-modal" onClick={this.openModal} type="button">
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
          <form onSubmit={this.onSubmit}>
            <div className="modal-input">
              <label>Titre</label>
              <input
                type="text"
                name="title"
                required
                value={this.state.title}
                onChange={this.handleChange}
              />
              <label>Auteur</label>
              <input
                type="text"
                name="author"
                required
                value={this.state.author}
                onChange={this.handleChange}
              />
              <label>Editeur</label>
              <input
                type="text"
                name="editor"
                required
                value={this.state.editor}
                onChange={this.handleChange}
              />
              <label>Pays</label>
              <input
                type="text"
                name="country"
                required
                value={this.state.country}
                onChange={this.handleChange}
              />
              <label>Genre</label>
              <input
                type="text"
                name="genre"
                required
                value={this.state.genre}
                onChange={this.handleChange}
              />
              <label>Nombre de Pages</label>
              <input
                type="text"
                name="pages"
                required
                value={this.state.pages}
                onChange={this.handleChange}
              />
              <label>Note / 5</label>
              <input
                type="text"
                name="note"
                required
                value={this.state.note}
                onChange={this.handleChange}
              />
              <label>Lu en</label>
              <input
                type="text"
                name="read"
                required
                value={this.state.read}
                onChange={this.handleChange}
              />
            </div>
            <div className="center-button">
              <button
                className="modal-button"
                // onSubmit={this.closeModal}
                type="submit"
              >
                Ajouter
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(AddBooks);
