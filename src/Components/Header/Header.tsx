import "./Header.css";
import * as React from "react";
import { DropdownMenu, MenuItem } from "@itwin/itwinui-react";
import pig from "../../../public/pig.svg";

const Header = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

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
    <MenuItem key={0} onClick={() => close()}>
      <a href="/">About</a>
    </MenuItem>,
    <MenuItem key={1} onClick={() => close()}>
      <a href="/work/for-every-year-you-dont-have">Work</a>
    </MenuItem>,
    <MenuItem key={2} onClick={() => close()}>
      <a href="/cv">CV</a>
    </MenuItem>,
    <MenuItem key={3} onClick={() => close()}>
      <a href="/contact">Contact</a>
    </MenuItem>,
  ];

  return (
    <header className="header">
      <h1>
        Brooklin Pigg <img className="icon" src={pig} />
      </h1>
      <div className="link-wrapper">
        {width <= 600 && (
          <DropdownMenu menuItems={dropdownLinks} className="dropdown">
            {<div>test</div>}
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
