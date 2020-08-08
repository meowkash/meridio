import React, { Component, useEffect, useState } from "react";
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

const ImagePicker = (props) => {
    const {
        visibility,
        setVisibility,
        accentColor,
        styles,
        isDarkMode,
        userprofileicon,
        setUserprofileicon
    } = props;

    return (
        <Overlay visible={visibility} animationType="zoomIn"
            containerStyle={{ backgroundColor: 'rgba(37, 8, 10, 0.78)' }} childrenWrapperStyle={{ alignSelf: 'center', position: 'absolute', width: '100%', height: '60%', backgroundColor: isDarkMode ? theme.dark.tertiaryBackground : theme.light.tertiaryBackground, borderRadius: 10, flex: 1 }}>
            <View style={{ flex: 2 }}>
                <Text style={{ textAlign: 'center', fontWeight: '200', fontSize: 20, color: isDarkMode ? theme.dark.secondary : theme.light.secondary }}>Choose Profile Icon</Text>
                <View style={{ borderBottomWidth: 1, width: 100, paddingTop: 10, borderColor: isDarkMode ? accentColor.dark : accentColor.light, alignSelf: 'center' }}></View>
            </View>
            <View style={{ flex: 8 }}>
                <FlatList
                    horizontal={false}
                    flexDirection='column'
                    numColumns={3}
                    style={styles.listStyle}
                    contentContainerStyle={{ flexGrow: 1 }}
                    data={imageList}
                    renderItem={({ item, index, separators }) => (
                        <TouchableOpacity
                            onPress={() => { setUserprofileicon(item); }}
                        >
                            <Image
                                source={Images.user[item]}
                                style={{ aspectRatio: 1, borderRadius: 50, alignContent: 'center' }}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                />
            </View>
            <TouchableOpacity
                borderRadius={50}
                onPress={() => {
                    setVisibility(false);
                }}
                flex={1}
            >
                <Text style={[styles.submitButton, { backgroundColor: isDarkMode ? accentColor.dark : accentColor.light }]}> Confirm </Text>
            </TouchableOpacity>
        </Overlay>
    );
}

const OverlayView = (props) => {
    const {
        visibility,
        setVisibility,
        accentColor,
        userName,
        userProfileIcon,
        styles,
        isDarkMode
    } = props;

    const [username, setUsername] = useState(userName);
    const [imagePickerVisibility, setImagePickerVisibility] = useState(false);
    const [userprofileicon, setUserprofileicon] = useState(userProfileIcon);

    const dispatch = useDispatch();
    const changeInfo = (newInfo) => dispatch(changeUserInfo(newInfo));

    return (
        <View>
            <ImagePicker
                visibility={imagePickerVisibility}
                setVisibility={setImagePickerVisibility}
                accentColor={accentColor}
                styles={styles}
                isDarkMode={isDarkMode}
                userprofileicon={userprofileicon}
                setUserprofileicon={setUserprofileicon}
            />

            <Overlay visible={visibility} animationType="zoomIn"
                containerStyle={{ backgroundColor: 'rgba(37, 8, 10, 0.78)' }} childrenWrapperStyle={{ alignSelf: 'center', position: 'absolute', width: '100%', backgroundColor: isDarkMode ? theme.dark.tertiaryBackground : theme.light.tertiaryBackground, borderRadius: 10, flex: 1 }}>
                <View style={{ flex: 2 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '300', fontSize: 20, color: isDarkMode ? theme.dark.secondary : theme.light.secondary }}>Edit Info</Text>
                    <View style={{ borderBottomWidth: 1, width: 100, paddingTop: 10, borderColor: isDarkMode ? accentColor.dark : accentColor.light, alignSelf: 'center' }}></View>
                </View>
                <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ textAlign: 'left', marginVertical: 8, paddingHorizontal: 16, fontSize: 16, textAlignVertical: 'center', flex: 1, color: isDarkMode ? theme.dark.secondary : theme.light.secondary }}>
                        User Name
                        <Ionicons name="chevron-forward"> </Ionicons>
                        <Text style={{ fontSize: 12, color: isDarkMode ? theme.dark.tertiary : theme.light.tertiary }}>{"\n"}(Max Length : 16) </Text>
                    </Text>
                    <TextInput
                        style={{ marginVertical: 8, paddingHorizontal: 16, fontSize: 16, textAlignVertical: 'center', flex: 1, color: isDarkMode ? theme.dark.secondary : theme.light.secondary }}
                        autoCompleteType='username'
                        maxLength={16}
                        textAlign='center'
                        onChangeText={(text) => { setUsername(text); }}
                    >
                        {userName}
                    </TextInput>
                </View>
                <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ marginVertical: 8, paddingHorizontal: 16, fontSize: 16, textAlignVertical: 'center', flex: 1, color: isDarkMode ? theme.dark.secondary : theme.light.secondary }}>
                        Profile Picture
                        <Ionicons name="chevron-forward"> </Ionicons>
                    </Text>
                    <TouchableOpacity
                        style={{ flex: 1, alignItems: 'center', marginVertical: 8, paddingHorizontal: 16 }}
                        onPress={() => setImagePickerVisibility(true)}
                    >
                        <Image
                            source={Images.user[userprofileicon]}
                            style={{ width: 50, height: 50, borderRadius: 25, alignContent: 'center' }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity
                        borderRadius={50}
                        onPress={() => {
                            setVisibility(false);
                            return changeInfo({
                                name: userName,
                                icon: userProfileIcon
                            });
                        }}
                        flex={1}
                    >
                        <Text style={[styles.submitButton, { marginHorizontal: '3%', backgroundColor: isDarkMode ? theme.dark.tertiary : theme.light.tertiary, color: isDarkMode ? theme.light.secondary : theme.dark.secondary }]}> Discard Changes </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        borderRadius={50}
                        onPress={() => {
                            setVisibility(false);
                            return changeInfo({
                                name: username,
                                icon: userprofileicon
                            });
                        }}
                        flex={1}
                    >
                        <Text style={[styles.submitButton, { marginHorizontal: '2%', backgroundColor: isDarkMode ? accentColor.dark : accentColor.light, color: isDarkMode ? theme.light.secondary : theme.dark.secondary }]}> Save Changes </Text>
                    </TouchableOpacity>
                </View>
            </Overlay>
        </View>
    );
}
const SettingsScreen = (props) => {
    const {
        profileImageStyle,
        profileImageSource,
        searchIcon,
        userNameTextStyle,
        searchBarStyle,
        searchInputStyle,
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