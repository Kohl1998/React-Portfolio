import React from "react";
import Header from "./Header";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from 'react-grid';

function Gallery(props) {
    console.log(props);

    // Loops through JSON objects and returns values
    const allProjects = props.propsData.map((eachProject) => {
        return (
            <div>
                <Container>
                <Row lg={3}>
                    {/* gives each card equal width*/}
                <Col className="d-flex">
                <Card style={{ width: '18rem' }} className="flex-fill">
                    <Card.Img variant="top" src={eachProject.screenshot} />
                    <Card.Body>
                        <Card.Title>{eachProject.title}</Card.Title>
                        <Card.Link href={eachProject.github} target="_blank">Github</Card.Link>
                        <Card.Link href={eachProject.deployment} target="_blank">Click for live application</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
                </Container>
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
