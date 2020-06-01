import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

const Modal = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {

  return (
    <>
      { isOpen &&
        <React.Fragment>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
              </div>
              <div className="modalBody">
                <input className="Modal-Login" type="text" placeholder="Логин"/>
                <input className="Modal-Password" type="text" placeholder="Пароль"/>
                <input id="checkbox" type="checkbox"/>
                <label htmlFor="checkbox">Запомнить</label>
                {children}
              </div>
              <div className="modalFooter">
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onSubmit}>Submit</button>
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
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};

export default Modal;
