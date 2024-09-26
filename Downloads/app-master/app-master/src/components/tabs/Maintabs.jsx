import React, { useState } from 'react'
import Tabs from './Tabs';

import Home from '../../screens/home/Home';
import Routes from '../../screens/routes/Routes';
import History from '../../screens/history/History';
import Profile from '../../screens/profile/Profile';
import Requests from '../../screens/requests/Requests';
import Appbar from '../Appbar/Appbar';

function Maintabs() {
    const [activeComponent, setActiveComponent] = useState(0);

  const renderComponent = () => {
    switch (activeComponent) {
      case 0:
        return <Home />;
      case 1:
        return <Routes />;
      case 2:
        return <History />;
      case 3:
        return <Requests />;
      default:
        return <Profile />;
    }
  };
  return (
    <div>
      {/* <Appbar/> */}
         {renderComponent()}
         <Tabs onChange={setActiveComponent} />
    </div>
  )
}

export default Maintabs