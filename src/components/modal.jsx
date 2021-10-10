import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({onCloseBtnClick, onOverlayClick, visible, text}) => {
  return (
    <>
      <div className={visible ? 'modal fade show' : 'modal fade'} tabIndex="-1"
           style={{display: visible ? 'flex' : 'none'}} onClick={onOverlayClick}>
        <div className="modal-dialog m-auto w-100">
          <div className="modal-content">
            <div className="modal-body">
              <p>{text}</p>
            </div>
            <div className="modal-footer">
              <a href="#" type="button" className="link-primary" onClick={onCloseBtnClick}>close</a>
            </div>
          </div>
        </div>
      </div>
      {visible && <div className="modal-backdrop fade show"/>}
    </>
  );
};

Modal.propTypes = {
  onCloseBtnClick: PropTypes.func,
  onOverlayClick: PropTypes.func,
  visible: PropTypes.bool,
  text: PropTypes.string
};

export default Modal;
