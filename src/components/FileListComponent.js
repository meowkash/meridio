import React, { Component } from 'react';
import Card from './CardComponent';

class FileList extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                <Card title="Files" defaultMessage="Files you send or receive will be shown here" cardHeight="300px" renderStyle="vertical" elementsToRender={this.props.files}/>
            </React.Fragment>
        );
    }
}

export default FileList;
