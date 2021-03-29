import React, { useState } from 'react';
import './style.scss';

const BurgerMenu = () => {
  const [status, setStatus] = useState('close');
  return (
    <nav>
      <div
        className="burgerMenu-container"
        role="button"
        onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
      >
        <i className={status}/>
        <i className={status}/>
        <i className={status}/>
      </div>
    </nav>
  );
};

export default BurgerMenu;
