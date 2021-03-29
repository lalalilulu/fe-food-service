import React, { useContext } from 'react';
import BurgerButton from '../BurgerButton/BurgerButton';
import { LeftSideBarContext } from '../LeftSideBar';
import './style.scss';

const LeftSection = () => {
  const { isShowSidebar, setIsShowSidebar } = useContext(LeftSideBarContext);
  return (
    <div className={`leftSideBar-leftSection leftSideBar-leftSection-${isShowSidebar ? 'show' : 'hide'}`}>
      <div className="leftSideBar-leftSection-topWrapper">
        <BurgerButton
          onClick={() => setIsShowSidebar(false)}
        />
      </div>
      <ul className="leftSideBar-leftSection-menuWrapper">
        <li>
          <a
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
          >
            Gallery
          </a>
        </li>
        <li>
         <a
            href="#"
          >
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSection;
