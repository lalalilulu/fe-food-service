import React, { useState } from 'react';
import TopSection from './TopSection/TopSection';
import LeftSection from './LeftSection/LeftSection';
import './style.scss';

export const LeftSideBarContext = React.createContext({})

const LeftSideMobileBar = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  return (
    <LeftSideBarContext.Provider
      value={{ isShowSidebar, setIsShowSidebar }}
    >
      <div className="container-fluid leftSideBar-container">
        <div
          className={`leftSideBar-container-overlay leftSideBar-container-overlay-${isShowSidebar ? 'show' : 'hide'}`}
          role="button"
          onClick={() => setIsShowSidebar(false)}
        />
        <TopSection />      
        <LeftSection />
      </div>
    </LeftSideBarContext.Provider>
  );
};

export default LeftSideMobileBar;
