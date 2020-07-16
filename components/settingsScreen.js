import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Button
} from "react-native";
import { DynamicStyleSheet, DynamicValue, useDynamicValue } from 'react-native-dynamic';
import { theme } from "../defaults/theme";
import Images from '../assets/assetIndex';

const dynamicStyles = new DynamicStyleSheet({
    container: {
        flex: 1,
        backgroundColor: new DynamicValue(theme.light.background, theme.dark.background)
    },
    topBar: {
        marginTop: "3%",
        flex: 1,
        backgroundColor: new DynamicValue(theme.light.secondaryBackground, theme.dark.secondaryBackground),
        marginHorizontal: 12,
        borderRadius: 10,
        paddingLeft: 12,
        paddingBottom: 4,
        paddingTop: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    topContainer: {
        flex: 3
    },
    profileImageStyle: {
        width: 90,
        height: 90,
        borderRadius: 45,
        alignContent: "center",
        alignSelf: "center",
    },
    userNameTextStyle: {
        fontSize: 22,
        flex: 1,
        color: new DynamicValue(theme.light.primary, theme.dark.primary),
        fontWeight: "bold",
        alignContent: "center",
        alignSelf: "center",
        paddingTop: 8,
        paddingBottom: 4,
    },
    settingsContainer: {
        flex: 3,
        marginTop: "3%",
        marginBottom: "3%",
        backgroundColor: new DynamicValue(theme.light.secondaryBackground, theme.dark.secondaryBackground),
        marginHorizontal: 12,
        borderRadius: 10,
        paddingBottom: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    supportContainer: {
        flex: 1,
        marginBottom: "3%",
        backgroundColor: new DynamicValue(theme.light.secondaryBackground, theme.dark.secondaryBackground),
        marginHorizontal: 12,
        borderRadius: 10,
        paddingBottom: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    listHeadingStyle: {
        textAlign: 'center',
        backgroundColor: new DynamicValue(theme.light.accent, theme.dark.accent),
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        lineHeight: 30,
        fontSize: 16,
        alignItems: 'center',
        paddingTop: 2,
        color: new DynamicValue(theme.light.primary, theme.dark.primary)
    }
});

const SettingsScreen = (props) => {
    const {
        profileImageStyle,
        profileImageSource,
        profileImageOnPress,
        userName,
        subuserName,
        searchIcon,
        userNameTextStyle,
        searchBarStyle,
        searchInputStyle,
    } = props;
    const styles = useDynamicValue(dynamicStyles);

    return (
        < View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    style={styles.topContainer}
                    onPress={profileImageOnPress}
                >
                    <Image
                        source={Images.user[profileImageSource]}
                        style={profileImageStyle || styles.profileImageStyle}
                    />
                </TouchableOpacity>
                <Text style={styles.userNameTextStyle}>{userName}</Text>
            </View>
            <View style={styles.settingsContainer}>
                <Text style={styles.listHeadingStyle}>Personalisation</Text>
            </View>
            <View style={styles.supportContainer}>
                <Text style={styles.listHeadingStyle}>Support Us!</Text>
                
            </View>
        </View>
    );
}

SettingsScreen.propTypes = {
    userName: PropTypes.string,
};

SettingsScreen.defaultProps = {
    userName: "AwesomeUser",
    profileImageSource: "caveman"
};

export default SettingsScreen;