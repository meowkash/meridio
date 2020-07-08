import React from 'react';

import {
    Text,
    Image,
} from 'react-native';

class FileItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FileListItem container">
                <div className="row">
                    <div className="col-6">
                        <p> {this.props.fileName} </p>
                    </div>
                    <div className="col-3">
                        <p> {this.props.fileSize} </p>
                    </div>
                    <div className="col-3">
                        <p> Progress Icon </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FileItem;
