import React from "react";
import resume from "./resume.pdf"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


function Resume () {
return (
    <div>
        <Header/>
        {/* To create a functional resume */}
        <a href="https://docs.google.com/document/d/1s7OIys-77hZnv5Ig4oI3PdGME-xDE7KQ-1ThYjYD3mo/edit" target="_blank">
            <Document file={resume} onLoadError={console.error} className="pdf">
                {/* To map through all pages within index */}
            {[1,2,3].map(page => (
            <Page pageNumber={page} />
        ))}
            </Document>
        </a>
        <Footer/>
    </div>
)
}

export default Resume
