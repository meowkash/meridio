import React, { Component } from 'react';

import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    name: {

    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    container: {

    }
});

const FileIcon = (props) => {
    var imgSrc = '../assets/' + props.iconType + '.png';
    return (
        <Image source={require('../assets/user_male.png')} style={styles.icon} />
    );
}

const UserAvatar = (props) => {
    const {
        fileType,
        fileName,
        fileSize,
    } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <FileIcon
                    iconType={fileType}>
                </FileIcon>
                <Text style={styles.name}>
                    {fileName}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

UserAvatar.defaultProps = {
    avatarIcon: 'user_male',
    userName: "AwesomeUser",
};

export default UserAvatar;