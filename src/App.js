import { useState } from "react";
import "./App.css";
import { Header, Sidebar } from "./Components";
import Analytics from "./Components/Analytics/Analytics";

function App() {
  const [isSidebarCollapsed, setIsidebarCollapsed] = useState(false);
  return (
    <div className="app">
      <div className="static-frames">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <div style={{ width: "100%" }}>
          <Header
            setIsidebarCollapsed={setIsidebarCollapsed}
            isSidebarCollapsed={isSidebarCollapsed}
          />
          <Analytics />
        </div>
        {/* <Analytics /> */}
      </div>
    </div>
  );
}

export default App;
