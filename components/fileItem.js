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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        paddingBottom: 2,
        paddingTop: 2,
        paddingRight: 0,
        paddingLeft: 10,
        borderBottomColor: '#A7A7A7'
    },
    name: {
        alignItems: 'flex-start',
        flex: 5,
        marginHorizontal: 10,
        paddingLeft: 2,
        paddingRight: 2,
    },
    size: {
        flex: 1.2,
        textAlign: 'right',
        marginRight: 10,
        paddingRight: 2,
    },
    icon: {
        // width: '10%',
        flex: 1,
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