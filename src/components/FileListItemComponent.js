// This is the basic card that will be fill with the people bar and the files bar
import React, { Component } from 'react';
import './FileListItemComponent.css';

class FileListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Card">
                <div className="CardHeader" id={`${this.props.title}Card`}>
                  <p className="CardTitle"> {this.props.title} </p>            
                </div>
                <div className="CardContent">
                  <p id={`${this.props.title}DefaultMessage`}> {this.props.defaultMessage} </p>
                </div>
            </div>
        );
    }
}

export default FileListItem;
