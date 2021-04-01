import React from 'react';
import './style.scss';

const BurgerButton = ({ onClick }) => {
  return (
    <div
      className="leftSideBar-burgerButton"
      role="button"
      onClick={onClick}
    >
      <i/>
      <i/>
      <i/>
    </div>
  );
};

export default BurgerButton;
