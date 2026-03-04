import "./Work.css";
import work from "../../assets/work";
import { useParams } from "react-router";

const Work = () => {
  const key = useParams().key;
  //@ts-ignore
  const { title, year, content } = work.find((poem) => poem.key === key);

  const publishedWork = work.filter((poem) => poem.published);

  const unpublishedWork = work.filter((poem) => !poem.published);

  return (
    <main className="work-view-wrapper">
      <nav className="side-bar">
        <div className="published-wrapper">
          <span>PUBLISHED WORK</span>
          {publishedWork.map((work) => (
            <a href={`${work.href}`}>{work.title}</a>
          ))}
        </div>

        {unpublishedWork.map((work) => (
          <a href={`${work.key}`}>{work.title}</a>
        ))}
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
