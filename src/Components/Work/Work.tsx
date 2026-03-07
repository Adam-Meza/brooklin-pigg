import "./Work.css";
import work from "../../assets/work";
import { useParams, Link } from "react-router";
import { DropdownMenu, MenuDivider, MenuItem } from "@itwin/itwinui-react";
import { useNavigate } from "react-router";
import * as React from "react";

const Work = () => {
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

  const navToWork = (url: string, close: () => void) => {
    nav(url);
    close();
  };

  const key = useParams().key;
  //@ts-ignore
  const { title, year, content } = work.find((work) => work.key === key);

  const publishedWorkDropdown = (close: () => void) => {
    return [
      work
        .filter((work) => work.published)
        .map((work) => (
          <MenuItem onClick={() => navToWork(`${work.href}`, close)} key={0}>
            {work.title}
          </MenuItem>
        )),
      <MenuDivider key={1} />,
      work
        .filter((work) => !work.published)
        .map((work, i) => (
          <MenuItem
            key={i + 2}
            onClick={() => navToWork(`/work/${work.key}`, close)}
          >
            {work.title}
          </MenuItem>
        )),
    ].flat();
  };

  return (
    <main className="work-view-wrapper">
      {width > 1150 && (
        <nav className="side-bar">
          <div className="published-wrapper">
            <span>PUBLISHED WORK</span>
            {work
              .filter((work) => work.published)
              .map((work) => (
                <Link to={`${work.href}`}>{work.title}</Link>
              ))}
          </div>
          {work
            .filter((work) => !work.published)
            .map((work) => (
              <Link to={`/work/${work.key}`}>{work.title}</Link>
            ))}
        </nav>
      )}

      {width <= 1150 && (
        <DropdownMenu
          className="work-dropdown"
          menuItems={publishedWorkDropdown}
        >
          <div className="work-dropdown-btn"> SELECTED WORK</div>
        </DropdownMenu>
      )}

      <div className="selected-work">
        <h2>
          <span className="title">{title}</span>
          <span className="year">{year}</span>
        </h2>
        <p>
          {content.map((stanza: String) => {
            return <p>{stanza}</p>;
          })}
        </p>
      </div>
    </main>
  );
};

export default Work;
