// @ts-nocheck

import { Sidebar, SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";
import NavItems from "./NavItems";

const MobileSidebar = () => {
  let sidebar: SidebarComponent;

  const handleToggle = () => {
    sidebar.toggle();
  };

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img src="/assets/icons/logo.svg" alt="logo" />
          <h1>Tourvisto</h1>
        </Link>

        <button type="button" onClick={handleToggle}>
          <img src="/assets/icons/menu.svg" className="size-7" alt="menu" />
        </button>
      </header>

      <SidebarComponent
        width={270}
        ref={(Sidebar) => (sidebar = Sidebar)}
        created={() => sidebar.hide()}
        closeOnDocumentClick
        showBackdrop
        type="over"
      >
        <NavItems handleClick={handleToggle} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
