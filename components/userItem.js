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
    text: {
        alignSelf: "center",
        alignItems: "center",
    },
    image: {
        width: 90,
        height: 90,
        resizeMode: 'contain'
    },
    container: {
        alignItems: "center",
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 4,
    }
});

const UserAvatar = (props) => {
    const {
        avatarIcon,
        userName,
    } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={Images.user[avatarIcon]} style={styles.image} />
                <Text style={styles.text}>
                    {userName}
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