import "./Work.css";
import work from "../../assets/work";
import { useParams } from "react-router";

const Work = () => {
  const key = useParams().key;
  //@ts-ignore
  const { title, year, content } = work.find((poem) => poem.key === key);

  return (
    <main className="work-view-wrapper">
      <nav className="side-bar">
        {work.map((work) => (
          <a href={`work/${work.key}`}>{work.title}</a>
        ))}
      </nav>
      <section className="work-wrapper">
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
      </section>
    </main>
  );
};

export default Work;
