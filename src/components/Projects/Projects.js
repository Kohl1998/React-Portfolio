import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Projects.css";
import { Card } from "react-bootstrap";
import { Data } from "../Gallery/Data";

function Project() {

    /* check to see json data */
    console.log(Data)

    const allInfo = Data.map((set) => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                    <div className="img-container">
                    <Card.Img variant="top" src={set.screenshot} />
                        <Card.Body>
                            <Card.Title className="card-title">{set.title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link href={set.deployment} target="_blank" className="card-link">Click to see deployed site</Card.Link>
                        </Card.Body>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <Header />
            {allInfo}
            <Footer />
        </div>
    )


}

export default Project
