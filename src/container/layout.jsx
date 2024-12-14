import React, { useState } from "react";
import { Header, Content } from "./index";

function Layout(props) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleSidebarToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    return (
  
            <div>
              <Header handleSidebarToggle={handleSidebarToggle} />
              <Content  />
            </div>
    )
  }

export default Layout;
