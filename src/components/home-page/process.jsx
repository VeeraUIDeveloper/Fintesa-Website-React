import "./process.scss";
import Card from "../card/card.jsx";
import { PROCESS_DATA } from "../../constants/process-data.jsx";

const ProcessSection = () => {
  let sectionPrefixClass = "process";

  return (
    <section className={`${sectionPrefixClass}`}>
      <div className="container">
        <div className={`${sectionPrefixClass}_wrapper text-center`}>
          <h4>How It Work?</h4>
          <h2>Fintesa app starting process</h2>
          <p>We provide guide how to work fintesa application</p>
        </div>
        <div
          className={`${sectionPrefixClass}_content d-flex align-items-center justify-content-between`}
        >
          <ProcessCard />
        </div>
      </div>
    </section>
  );
};

const ProcessCard = () => {
  return (
    <>
      {PROCESS_DATA.map((data, index) => (
        <Card key={index} className="bg-light text-center">
          <span className="count">{index + 1}</span>
          <h3>{data.title}</h3>
          <p>{data.text}</p>
          <a href={data.link}>{data.linkText}</a>
        </Card>
      ))}
    </>
  );
};

export default ProcessSection;
