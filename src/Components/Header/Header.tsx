import "./Header.css";
import * as React from "react";
import { DropdownMenu, MenuItem } from "@itwin/itwinui-react";
import { useNavigate } from "react-router";

const Header = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const nav = useNavigate();

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dropdownLinks = (close: () => void) => [
    <MenuItem
      key={0}
      onClick={() => {
        nav("/");
        close();
      }}
    >
      About
    </MenuItem>,
    <MenuItem
      key={1}
      onClick={() => {
        nav("/work/for-every-year-you-dont-have");
        close();
      }}
    >
      Work
    </MenuItem>,
    <MenuItem
      key={2}
      onClick={() => {
        nav("/cv");
        close();
      }}
    >
      CV
    </MenuItem>,
    <MenuItem
      key={3}
      onClick={() => {
        nav("/contact");
        close();
      }}
    >
      Contact
    </MenuItem>,
  ];

  return (
    <header className="header">
      <h1>Brooklin Pigg</h1>
      <div className="link-wrapper">
        {width <= 600 && (
          <DropdownMenu menuItems={dropdownLinks} className="dropdown">
            {<div>MENU</div>}
          </DropdownMenu>
        )}
        {width > 600 && (
          <>
            <a href="/">About</a>
            <a href="/work/for-every-year-you-dont-have">Work</a>
            <a href="/cv">CV</a>
            <a href="/contact">Contact</a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
