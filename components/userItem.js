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
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    container: {

    }
});

const AvatarImage = (props) => {
    var imgSrc = '../assets/' + props.iconName + '.png';
    console.log(imgSrc);
    return (
        <View>
            <Image source={require('../assets/user_male.png')} style={styles.image} />
        </View>

    );
}

const UserAvatar = (props) => {
    const {
        avatarIcon,
        userName,
    } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <AvatarImage iconName={avatarIcon}>
                </AvatarImage>
                <Text>
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