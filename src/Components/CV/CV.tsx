import "./cv.css";
import { experience } from "../../assets/experience";

const Cv = () => {
  return (
    <div className="cv-wrapper">
      <h2>CV</h2>
      <div className="exp-box-wrapper">
        {experience.map((job) => (
          <ExpCard
            title={job.title}
            company={job.company}
            years={job.years}
            notes={job.notes}
          />
        ))}
      </div>
    </div>
  );
};

type ExpCard = {
  title: String;
  company: String;
  years: String[];
  notes: String[];
};

const ExpCard = ({ title, company, years, notes }: ExpCard) => {
  return (
    <div className="exp-card-wrapper">
      <div className="exp-header">
        <h3 className="title">{title}</h3>
        <>
          <span className="company">{company}</span>
          <span className="year">
            {years[0]}-{years[1]}
          </span>
        </>
      </div>

      <div className="exp-details-wrapper">
        {notes.map((detail) => {
          return <div className="exp-detail"> - {detail}</div>;
        })}
      </div>
    </div>
  );
};

export default Cv;
