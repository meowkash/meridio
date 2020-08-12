import React, { Component } from 'react';

import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {
    connect,
} from 'react-redux';

import Images from '../assets/assetIndex';
import { theme } from '../defaults/theme';
import { DynamicStyleSheet, DynamicValue, useDynamicValue, useDarkMode } from 'react-native-dynamic';

const styles = {
    text: {
        alignSelf: "center",
        alignItems: "center"
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        alignItems: 'center',
    },
    container: {
        alignItems: "center",
        justifyContent: 'center',
        marginHorizontal: 10,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 4,
    }
};

const UserAvatar = (props) => {
    const {
        avatarIcon,
        userName,
        accentColor
    } = props;

    const isDarkMode = useDarkMode();

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={Images.user[avatarIcon]} style={styles.image} />
                <Text style={[styles.text, { color: isDarkMode ? accentColor.light : accentColor.dark }]}>
                    {userName}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        accentColor: state.prefs.accentColor
    }
}

export default connect(mapStateToProps)(UserAvatar);