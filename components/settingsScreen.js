import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { DynamicStyleSheet, DynamicValue, useDynamicValue } from 'react-native-dynamic';

const dynamicStyles = new DynamicStyleSheet({
    container: { margin: 32 },
    topBarContainer: {
        flexDirection: "row",
    },
    floatLeft: { marginRight: "auto" },
    floatRight: { marginLeft: "auto" },
    menuImageStyle: {
        width: 20,
        height: 20,
    },
    profileImageStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    contentContainer: {
        marginTop: 24,
    },
    titleTextStyle: {
        fontSize: 46,
        color: "#2c2305",
        fontWeight: "bold",
    },
    subtitleTextStyle: {
        fontSize: 13,
        marginTop: 5,
        fontWeight: "400",
        color: "#999893",
    },
});

const SettingsScreen = (props) => {
    const {
        profileImageStyle,
        profileImageSource,
        profileImageOnPress,
        title,
        subtitle,
        searchIcon,
        titleTextStyle,
        searchBarStyle,
        searchInputStyle,
        subtitleTextStyle,
    } = props;
    const styles = useDynamicValue(dynamicStyles);

    return (
        < View style={styles.container}>
            <View style={styles.topBarContainer}>
                <TouchableOpacity
                    style={styles.floatCenter}
                    onPress={profileImageOnPress}
                >
                    <Image
                        source={profileImageSource}
                        style={profileImageStyle || styles.profileImageStyle}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <Text style={titleTextStyle || styles.titleTextStyle}>{title}</Text>
                <Text style={subtitleTextStyle || styles.subtitleTextStyle}>
                    {subtitle}
                </Text>
            </View>
        </View>
    );
}

SettingsScreen.propTypes = {
    title: PropTypes.string,
};

SettingsScreen.defaultProps = {
    title: "Order",
};

export default SettingsScreen;