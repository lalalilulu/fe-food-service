import React, {useContext} from 'react';
import BurgerButton from '../../BurgerButton/BurgerButton';
import {LeftSideBarContext} from '../LeftSideMobileBar';
import TopRightSection from "../../TopRightSection/TopRightSection";
import './style.scss';

const TopSection = () => {
    const {setIsShowSidebar} = useContext(LeftSideBarContext);
    return (
        <div className="row leftSideBar-topSection">
            <BurgerButton
                onClick={() => setIsShowSidebar(true)}
            />
            <TopRightSection/>
        </div>
    );
};

export default TopSection;
