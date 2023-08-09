import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Worker } from "@react-pdf-viewer/core";
// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const DisplayCV = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="cv-container">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={"pdf/codecoolcv.pdf"}
          plugins={[defaultLayoutPluginInstance]}
          defaultScale={1.5}
          theme={"dark"}
        ></Viewer>
      </Worker>
    </div>
  );
};

export default DisplayCV;
