/* eslint-disable */
import React, {Component} from 'react';
import Modal from './Modal';
import Portal from "./Portal";

class ModalAuth extends React.Component {

    state = {
        userName: '',
        changedName: '',
        isOpen: false,
        isLoggedIn: false,
        userPersonalInformation: {
            key: 'user-info',
            keyValue: ''
        },
        userDisplayedName: {
            key: 'user-name',
            keyValue: ''
        },
    }

    componentDidMount() {
        if (localStorage.getItem('user-name')) {
            this.setState({isLoggedIn: true, userName: localStorage.getItem('user-name')})
        }
    }

    openModal = () => {
        this.setState({isOpen: true});
    }

    handleSubmit = () => {
        let inputLoginValue = document.getElementById("input-login");
        let inputPasswordValue = document.getElementById("input-password");
        const inputValue = inputLoginValue.value + ':' + inputPasswordValue.value;
        localStorage.setItem(this.state.userPersonalInformation.key, inputValue);
        localStorage.setItem(this.state.userDisplayedName.key, inputLoginValue.value);
        this.setState({isOpen: false, isLoggedIn: true, userName: localStorage.getItem('user-name')});
        console.log('Submit function!');
    }

    handleCancel = () => {
        this.setState({isOpen: false});
        console.log('Cancel function!');
    }

    handleChangeLogOut = () => {
        localStorage.removeItem(this.state.userPersonalInformation.key)
        localStorage.removeItem(this.state.userDisplayedName.key);
        this.setState({userName: '', isLoggedIn: false});
        console.log('logout...');
    }

    handleChangeName = () => {
        const inputNameChanger = document.getElementById('input-name-change');
        localStorage.setItem('user-name', inputNameChanger.value);
    }

    render() {
        return (
                    <div className="header__header-auth">
                        <input className="header__header-auth__input" id="input-name-change"
                               defaultValue={this.state.userName}
                               onChange={this.handleChangeName}/>
                        <button className="header__header-auth__button"
                                onClick={(this.state.isLoggedIn === true ? this.handleChangeLogOut : this.openModal)}>
                            {(this.state.isLoggedIn === true ? 'Выйти' : 'Войти')}
                        </button>
                    <Portal style={{}}>
                        <Modal
                            title="Вход"
                            isOpen={this.state.isOpen}
                            isLoggedIn={this.state.isLoggedIn}
                            onCancel={this.handleCancel}
                            onSubmit={this.handleSubmit}
                            className="portal__modal-window"
                        >
                        </Modal>
                    </Portal>
                </div>
        )
    }

}

export default ModalAuth;


/* eslint-enable */
