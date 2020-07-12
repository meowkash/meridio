import React, { Component } from 'react';

import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Images from '../assets/assetIndex';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.25,
        paddingBottom: 2,
        paddingTop: 2,
        paddingRight: 16,
        paddingLeft: 10,
        borderBottomColor: '#A7A7A7'
    },
    name: {
        alignItems: 'center',
    },
    size: {
        
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    }
});

const UserAvatar = (props) => {
    const {
        fileType,
        fileName,
        fileSize,
    } = props;

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={Images.file[fileType]} style={styles.icon} />
                <Text style={styles.name}>
                    {fileName}
                </Text>
                <Text style={styles.size}>
                    {fileSize}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

UserAvatar.defaultProps = {
    avatarIcon: 'user_male',
    userName: "AwesomeUser",
};

export default UserAvatar;