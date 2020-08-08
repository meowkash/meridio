import React, { useEffect, useState } from "react";

import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
} from "react-native";

import Overlay from 'react-native-modal-overlay';
import { DynamicStyleSheet, DynamicValue, useDynamicValue, useDarkMode } from 'react-native-dynamic';
import { FlatList } from "react-native-gesture-handler";
import { connect, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { theme } from "../defaults/theme";
import { accentColors } from '../defaults/accents';
import Images, { imageList } from '../assets/assetIndex';
import {
    changeAccentColor,
    changeVisibility,
    changeUserInfo
} from '../actions/updatePreferences';

import { OverlayView } from './userPrefOverlay';

const dynamicStyles = new DynamicStyleSheet({
    container: {
        flex: 1,
        backgroundColor: new DynamicValue(theme.light.background, theme.dark.background),
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
    userNameContainer: {
        flex: 1,
        color: new DynamicValue(theme.light.primary, theme.dark.primary),
        backgroundColor: new DynamicValue(theme.light.secondaryBackground, theme.dark.secondaryBackground),
        alignContent: 'center',
        alignSelf: "center",
        paddingTop: 8,
        paddingBottom: 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    userNameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: new DynamicValue(theme.light.primary, theme.dark.primary),
        flex: 14,
        textAlign: 'center'
    },
    userNameEdit: {
        marginLeft: "-10%",
        marginRight: "3.33%",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // color: new DynamicValue(theme.light.label, theme.dark.label),
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
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 2.5,
        borderBottomRightRadius: 2.5,
        lineHeight: 30,
        fontSize: 16,
        alignItems: 'center',
        paddingTop: 2,
        color: new DynamicValue(theme.light.label, theme.dark.label)
    },
    itemHead: {
        flex: 1,
        textAlign: 'left',
        fontSize: 16,
        paddingHorizontal: 10,
        backgroundColor: new DynamicValue(theme.light.secondaryBackground, theme.dark.secondaryBackground),
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    itemInfo: {
        fontSize: 12,
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
    },
    submitButton: {
        borderRadius: 50,
        width: 150,
        height: 50,
        marginTop: "5%",
        marginBottom: "5%",
        textAlignVertical: 'center',
        textAlign: 'center',
        color: new DynamicValue(theme.light.label, theme.dark.label)
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
        accentColor,
        userName,
        userProfileIcon
    } = props;

    const styles = useDynamicValue(dynamicStyles);

    const [overlayVisibility, setOverlayVisibility] = useState(false);

    const isDarkMode = useDarkMode();

    return (
        < View style={styles.container}>
            <OverlayView
                visibility={overlayVisibility}
                setVisibility={setOverlayVisibility}
                accentColor={accentColor}
                userName={userName}
                userProfileIcon={userProfileIcon}
                styles={styles}
                isDarkMode={isDarkMode}
            />
            <View style={styles.topBar}>
                <View
                    style={styles.topContainer}   
                >
                    <Image
                        source={Images.user[userProfileIcon]}
                        style={profileImageStyle || styles.profileImageStyle}
                    />
                </View>
                <View style={styles.userNameContainer}>
                    <Text style={styles.userNameText}>{userName}</Text>
                    <TouchableOpacity style={styles.userNameEdit} onPress={() => {
                        if (overlayVisibility === false)
                            setOverlayVisibility(true);
                    }}>
                        <Icon name="edit" color={isDarkMode ? accentColor.dark : accentColor.light} size={20}> </Icon>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.settingsContainer}>
                <Text style={[styles.listHeadingStyle, { backgroundColor: isDarkMode ? accentColor.dark : accentColor.light }]}>Personalisation</Text>

                <View style={styles.itemContent}>
                    <Text style={[styles.itemHead, { color: isDarkMode ? accentColor.dark : accentColor.light }]}>
                        Accent Color
                    </Text>
                    <Text style={[styles.itemInfo, { borderBottomColor: isDarkMode ? accentColor.dark : accentColor.light }]}>
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
                    <Text style={[styles.itemHead, { color: isDarkMode ? accentColor.dark : accentColor.light }]}>
                        Visibility
                    </Text>
                    <Text style={[styles.itemInfo, { borderBottomColor: isDarkMode ? accentColor.dark : accentColor.light }]}>
                        Modify who you are visible to
                    </Text>
                    <View style={styles.itemOptions}>

                    </View>
                </View>
            </View>
            <View style={styles.supportContainer}>
                <Text style={[styles.listHeadingStyle, { backgroundColor: isDarkMode ? accentColor.dark : accentColor.light }]}>Support Us!</Text>
            </View>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        accentColor: state.prefs.accentColor,
        userName: state.prefs.userName,
        userProfileIcon: state.prefs.userProfileIcon,
    }
}

export default connect(mapStateToProps)(SettingsScreen);