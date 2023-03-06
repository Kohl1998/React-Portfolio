import React, { Component } from "react";
import Header from "./Header";
import projects from '../projects.json'
import Gallery from "./Gallery";

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