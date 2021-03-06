import React from 'react';
import { createPortal } from 'react-dom';

const Modal = props => {
  return createPortal(
    <div className='ui dimmer modals visible active' onClick={props.onDismiss}>
      <div
        className='ui standard modal visible active'
        // e.stopPropagation will halt event bubbling up
        onClick={e => e.stopPropagation()}>
        <div className='header'>{props.title}</div>
        <div className='content'>{props.content}</div>
        <div className='actions'>{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
