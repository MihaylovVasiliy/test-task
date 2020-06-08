import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

const Modal = ({
                   title, isOpen, onCancel, onSubmit, children,
               }) => {

    return (
        <>
            {isOpen &&
            <React.Fragment>
                <div className="modalOverlay">
                    <div className="modalWindow">
                        <div className="modalHeader">
                            <div className="modalTitle">{title}</div>
                        </div>
                        <div className="modalBody">
                            <input className="modal-Login" id="input-login" type="text" placeholder="Логин"/>
                            <input className="modal-Password" id="input-password" type="text" placeholder="Пароль"/>
                            <input id="checkbox-remember" type="checkbox"/>
                            <label htmlFor="checkboxlabel">Запомнить</label>
                            {children}
                        </div>
                        <div className="modalFooter">
                            <button onClick={onSubmit}>Войти</button>
                            <button onClick={onCancel}>Х</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            }
        </>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
};

Modal.defaultProps = {
    title: 'Modal title',
    isOpen: false,
    onCancel: () => {
    },
    onSubmit: () => {
    },
    children: null,
};

export default Modal;
