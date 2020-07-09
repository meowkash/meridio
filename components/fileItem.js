import React, { Component } from 'react';

import {
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class FileItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity>
                <Image style={this.styles.image}>
                    
                </Image>
                <Text style={this.styles.text}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        );
    }

    styles = StyleSheet.create({
        text: {

        },
        image: {

        }
    });
}

export default FileItem;
