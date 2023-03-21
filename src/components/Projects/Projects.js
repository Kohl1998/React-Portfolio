<<<<<<< HEAD
import React, { Component } from "react";
import projects from './projects.json'
import Gallery from "../Gallery/Gallery";

/* Must be a reusable component that ingests JSON data as a props and renders a single instance for each project.
[ ] Must utilize router props to properly render the right project based on user selection
[ ] Must render the following info:
[ ] Project title
[ ] Link to the deployed version
[ ] Link to the GitHub repository
[ ] GIF or screenshot of the deployed application */

export class Projects extends Component {

    // use class based components for states 
    state = {
        projectData: projects
    }

    render() {
        console.log("Hello world", projects)

        // Assigns data to state

        return (
            <div>
                {/* Refers to JSON data in state object */}
                <Gallery propsData={this.state.projectData} />
            </div>
        )
    }
}

export default Projects;
=======
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Projects.css";
import { Card } from "react-bootstrap";
import { Data } from "../Gallery/Data";
import Row from "react-bootstrap";
import Button from "react-bootstrap";
import Col from "react-bootstrap";
import Container from "react-bootstrap";

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
>>>>>>> 4e0c2e15ce2f9c1be90401041a43c604434140b5
