import React, {useContext} from 'react';
import {LeftSideBarContext} from '../LeftSideMobileBar';
import MenuWrapper from "../../MenuWrapper/MenuWrapper";
import './style.scss';

const LeftSection = () => {
    const {isShowSidebar, setIsShowSidebar} = useContext(LeftSideBarContext);
    return (
        <div className={`leftSideBar-leftSection leftSideBar-leftSection-${isShowSidebar ? 'show' : 'hide'}`}>
            <MenuWrapper/>
        </div>
    );
};

export default LeftSection;
