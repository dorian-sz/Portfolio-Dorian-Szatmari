import "./CVPage.css";
import DisplayCV from "../../components/CV/DisplayCV";
import { useTitle } from "../../components/setTitle";

const CVPage = () => {
  useTitle("CV");
  return (
    <div className="cv-page-container">
      <DisplayCV></DisplayCV>
    </div>
  );
};

export default CVPage;
