import gallery from "./gallery.json";
import React, { Component } from "react";


export class Gallery extends Component {

    // use class based components for states 
    state = {
        projectData: gallery
    }

    render() {
        console.log("Hello world", gallery)

        // Assigns data to state

        return (
            <div>
                {/* Refers to JSON data in state object */}
                <gallery propsData={this.state.projectData} />
            </div>
        )
    }
}

export default Gallery;