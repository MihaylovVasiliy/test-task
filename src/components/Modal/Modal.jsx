import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/modal.scss';

const Modal = ({
                   title, isOpen, onSubmit, children,
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
                            <div className="modalBodyCheckbox">
                                <input className="modal-checkbox-input" id="checkbox-remember" type="checkbox"/>
                                <label className="modal-checkbox-label" htmlFor="checkboxlabel">Запомнить</label>
                            </div>
                            {children}
                        </div>
                        <div className="modalFooter">
                            <button className="modal-enter-button" onClick={onSubmit}>Войти</button>
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
