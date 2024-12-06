
import './App.css';
import React, { useState } from "react";
import AddResData from './AddData';
import Home from './Home';
import Nav from './Nav';
import ViewRecords from './ViewRecords';
import NatAnalytics from './NatAnalytics';
const appStyles = {
  backgroundColor: '#92a8d1', 
  minHeight: '100vh', 
  padding: '20px', 
  fontFamily: 'Arial, sans-serif',   
};

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div style={appStyles}>
      <Nav setActiveTab={setActiveTab} />

      {activeTab === "home" && <Home />}
      {activeTab === "addRecord" && <AddResData />}
      {activeTab === "viewRecords" && <ViewRecords />} {/* Add ViewRecords tab */}
    {activeTab==="viewAnalytics"&& <NatAnalytics/>}
    </div>
  );
};

export default App;
