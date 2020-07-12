import React, { Component } from 'react';

import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    text: {

    },
    image: {

    },
    container: {

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
                <Text>
                    {userName}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

UserAvatar.defaultProps = {
    avatarIcon: 0,
    userName: "AwesomeUser",
};

export default UserAvatar;