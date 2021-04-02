import React, {useContext} from 'react';
import BurgerButton from '../../BurgerButton/BurgerButton';
import {LeftSideBarContext} from '../LeftSideMobileBar';
import MenuWrapper from "../../MenuWrapper/MenuWrapper";
import './style.scss';

const LeftSection = () => {
    const {isShowSidebar, setIsShowSidebar} = useContext(LeftSideBarContext);
    return (
        <div className={`leftSideBar-leftSection leftSideBar-leftSection-${isShowSidebar ? 'show' : 'hide'}`}>
            {/*<div className="leftSideBar-leftSection-topWrapper">*/}
            {/*    <BurgerButton*/}
            {/*        onClick={() => setIsShowSidebar(false)}*/}
            {/*    />*/}
            {/*</div>*/}
            <MenuWrapper/>
        </div>
    );
};

export default LeftSection;
