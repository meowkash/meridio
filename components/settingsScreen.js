import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Pressable,
    TextInput,
    Button
} from "react-native";
import { DynamicStyleSheet, DynamicValue, useDynamicValue, useDarkMode } from 'react-native-dynamic';
import { FlatList } from "react-native-gesture-handler";
import { connect, useDispatch } from "react-redux";

import { theme } from "../defaults/theme";
import { accentColors } from '../defaults/accents';
import Images from '../assets/assetIndex';
import { changeAccentColor, changeVisibility } from '../actions/updatePreferences';

const dynamicStyles = new DynamicStyleSheet({
    container: {
        flex: 1,
        backgroundColor: new DynamicValue(theme.light.background, theme.dark.background)
    },
    topBar: {
        marginTop: "3%",
        flex: 2,
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
        flex: 5,
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
        flex: 2.4,
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
        borderBottomLeftRadius: 2.5,
        borderBottomRightRadius: 2.5,
        lineHeight: 30,
        fontSize: 16,
        alignItems: 'center',
        paddingTop: 2,
        color: new DynamicValue(theme.light.primary, theme.dark.primary)
    },
    itemHead: {
        flex: 1,
        textAlign: 'left',
        fontSize: 16,
        paddingHorizontal: 10,
        color: new DynamicValue(theme.light.accent, theme.dark.accent),
        backgroundColor: new DynamicValue(theme.light.secondaryBackground, theme.dark.secondaryBackground),
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    itemInfo: {
        fontSize: 12,
        borderBottomColor: new DynamicValue(theme.light.accent, theme.dark.accent),
        borderBottomWidth: 1,
        flex: 1,
        paddingHorizontal: 10,
        color: new DynamicValue(theme.light.tertiary, theme.dark.tertiary),
        backgroundColor: new DynamicValue(theme.light.secondaryBackground, theme.dark.secondaryBackground),
    },
    itemOptions: {
        flex: 3.5,
        backgroundColor: new DynamicValue(theme.light.secondaryBackground, theme.dark.secondaryBackground),
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
    },
    itemContent: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: new DynamicValue(theme.light.secondaryBackground, theme.dark.secondaryBackground)
    }
});

const ButtonStyles = new DynamicStyleSheet({
    textStyle: {
        fontSize: 12,
        color: new DynamicValue(theme.light.primary, theme.dark.primary)
    }
});

const AccentColorButton = (props) => {
    const {
        colorValue,
        name
    } = props;

    const butStyle = useDynamicValue(ButtonStyles);
    const dispatch = useDispatch();
    const changeAccent = (name) => dispatch(changeAccentColor(name));

    return (
        <View style={{ marginHorizontal: 12, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => changeAccent(name)}>
                <Image
                    backgroundColor={colorValue}
                    width={25}
                    height={25}
                    borderRadius={15}
                    marginTop={20}
                    marginBottom={10}
                />
            </TouchableOpacity>
            <Text style={butStyle.textStyle}>
                {name}
            </Text>
        </View>
    );
}
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

    const isDarkMode = useDarkMode();

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

                <View style={styles.itemContent}>
                    <Text style={styles.itemHead}>
                        Accent Color
                    </Text>
                    <Text style={styles.itemInfo}>
                        Change the color used throughout the app
                    </Text>
                    <View style={styles.itemOptions}>
                        <FlatList
                            horizontal={true}
                            data={accentColors}
                            renderItem={({ item, index, separators }) => (
                                <AccentColorButton
                                    name={item.name}
                                    colorValue={!isDarkMode ? item.lightHex : item.darkHex}
                                />
                            )}
                            keyExtractor={(item, index) => item.name}
                        />
                    </View>
                </View>

                <View style={styles.itemContent}>
                    <Text style={styles.itemHead}>
                        Visibility
                    </Text>
                    <Text style={styles.itemInfo}>
                        Modify who you are visible to
                    </Text>
                    <View style={styles.itemOptions}>

                    </View>
                </View>
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