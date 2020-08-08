import React, { useState } from "react";

import { useDispatch } from "react-redux";

import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import Overlay from 'react-native-modal-overlay';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Images, { imageList } from '../assets/assetIndex';

import { theme } from "../defaults/theme";

import {
    changeUserInfo
} from '../actions/updatePreferences';

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

export const OverlayView = (props) => {
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