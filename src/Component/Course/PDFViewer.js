import React, { useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPdfRequest } from "../../action/Course/FetchPdfAction";
import { Container, Row } from "react-bootstrap";
import { fetchIndividualContentRequest } from "../../action/Course/FetchIndividualContentByIdAction";
 
function PDFViewer(prop) {
  const [error, setError] = useState(null);
  const {material}= prop;
  const [viewpdf, setViewPdf] = useState(material);
 const dispatch=useDispatch();
  const [fileResponse, setFileResponse] = useState([]);
 useEffect(()=>{
  dispatch(fetchIndividualContentRequest(material));
console.log(material);
 },[])
  const newPlugin = defaultLayoutPlugin({
    toolbar: {
      download: {
        enabled: false, // Disable the download button
      },
    },
  });
  const pdf=useSelector((state)=>state.fetchIndividualContent.content)
  console.log("pdf",pdf.filePath);
  useEffect(()=>{
    setViewPdf(pdf.filePath)
    console.log("view",viewpdf);
  },[pdf])

return (
    <Container >
     <Row className="justify-content-md-center">
     {/* <div
          className="container"
          style={{ width: "100%",height:"83vh",marginTop:'0px'}}
        > */}
        <div className="pdf-container" style={{ width: 150 ,height:"83vh"}}>
          
          {error && <div className="error">{error}</div>}
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            {viewpdf ? (

              <Viewer fileUrl={viewpdf} plugins={[newPlugin]} />
            ) : (
              <div>No PDF available</div>
            )}
          </Worker>
        </div>
      {/* </div> */}
     </Row>
    </Container>

  );
}
 
export default PDFViewer;
