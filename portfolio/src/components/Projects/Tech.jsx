import "./Tech.css";

const Tech = ({ techName, fontSize }) => {
  return (
    <div className="tech-container" style={{ fontSize: fontSize }}>
      <p>{techName}</p>
    </div>
  );
};

export default Tech;
