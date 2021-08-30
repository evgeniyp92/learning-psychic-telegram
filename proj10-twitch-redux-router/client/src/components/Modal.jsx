import React from 'react';
import { createPortal } from 'react-dom';

const Modal = props => {
  return createPortal(
    <div className='ui dimmer modals visible active'>
      <div className='ui standard modal visible active'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        qui sit consequuntur commodi adipisci, porro, asperiores soluta quos
        pariatur fugiat eligendi illo consequatur hic perspiciatis officiis.
        Quis sed quidem odio.
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
