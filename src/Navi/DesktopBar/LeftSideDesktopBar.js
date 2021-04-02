import React from 'react';
import TopSection from './TopSection/TopSection';
import LeftSection from './LeftSection/LeftSection';

const LeftSideDesktopBar = () => {

  return (
      <div className="container-fluid">
        <TopSection />      
        <LeftSection />
      </div>

  );
};

export default LeftSideDesktopBar;
