import "./Work.css";
import work from "../../assets/work";
import { useParams } from "react-router";
import { DropdownMenu, MenuItem } from "@itwin/itwinui-react";
import * as React from "react";

const Work = () => {
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

  const key = useParams().key;
  //@ts-ignore
  const { title, year, content } = work.find((poem) => poem.key === key);

  const publishedWork = work
    .filter((poem) => poem.published)
    .map((work) => <a href={`${work.href}`}>{work.title}</a>);

  const unpublishedWork = work
    .filter((poem) => !poem.published)
    .map((work) => <a href={`${work.key}`}>{work.title}</a>);

  const dropdownLinks = (close: () => void) => {};

  return (
    <main className="work-view-wrapper">
      <nav className="side-bar">
        <div className="published-wrapper">
          <span>PUBLISHED WORK</span>
          {publishedWork}
        </div>

        {unpublishedWork}
      </nav>
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
