/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Modal from './Modal';
import Portal from "./Portal";

class ModalAuth extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    console.log('Submit function!');
    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Portal>
        <button onClick={this.openModal}>Войти</button>
        <Modal
          title="Вход"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
        </Modal>

      </Portal>
    );
  }
}

export default ModalAuth;
/* eslint-enable */
