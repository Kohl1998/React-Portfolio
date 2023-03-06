import React from "react";
import Header from "./Header";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Gallery(props) {
    console.log(props);

    // Loops through JSON objects and returns values
    const allProjects = props.propsData.map((eachProject) => {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={eachProject.screenshot} />
                    <Card.Body>
                        <Card.Title>{eachProject.title}</Card.Title>
                        <Card.Link href={eachProject.github} target="_blank">Github</Card.Link>
                        <Card.Link href={eachProject.deployment} target="_blank">Click for live application</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        );
    });

    return (
        <div>
            <Header />
            {allProjects}
        </div>
    );
}

export default Gallery;
