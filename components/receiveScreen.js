import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    PermissionsAndroid
} from 'react-native';

import { connect } from "react-redux";

import FloatingList from './floatingList';
import { theme } from '../defaults/theme';
import {
    DynamicValue,
    DynamicStyleSheet,
    useDynamicValue,
    useDarkMode
} from 'react-native-dynamic';

import MeridioHeader from './meridioHeader';
import { OverlayView } from './userPrefOverlay';

import {
    receiveFromClient
} from './connectionUtilities';

const userDATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'First',
        icon: 'selfish'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Second',
        icon: 'male'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third',
        icon: 'female'
    },
]
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aef5-3ad53abb28ba',
        userName: 'Arthas',
        userIcon: 'caveman',
        totalFiles: 100,
        shareType: 'Received'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        userName: 'Phuuu',
        userIcon: 'male',
        totalFiles: 69,
        shareType: 'Sent'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        userName: 'Duckkuuu',
        userIcon: 'female',
        totalFiles: 10,
        shareType: 'Sent'
    }
]

const dynamicStyles = new DynamicStyleSheet({
    container: {
        backgroundColor: new DynamicValue(theme.light.background, theme.dark.background),
        flex: 1
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
})

const ReceiveScreen = (props) => {
    const {
        userName,
        userProfileIcon,
        accentColor,
        connectionRole
    } = props;

    const styles = useDynamicValue(dynamicStyles);

    const [overlayVisibility, setOverlayVisibility] = useState(false);

    const isDarkMode = useDarkMode();

    useEffect(() => {
        receiveFromClient();
    });

    return (
        <SafeAreaView style={styles.container}>
            <OverlayView
                visibility={overlayVisibility}
                setVisibility={setOverlayVisibility}
                accentColor={accentColor}
                userName={userName}
                userProfileIcon={userProfileIcon}
                styles={styles}
                isDarkMode={isDarkMode}
            />
            <MeridioHeader
                largeTitleFontSize={22}
                flex={1}
                visibility={overlayVisibility}
                setVisibility={setOverlayVisibility}
            />
            <FloatingList
                dataSrc={userDATA}
                isHorizontal={true}
                listTitle="Ongoing Shares"
                listElementType="UserAvatar"
                flex={5}
            />
            <FloatingList
                dataSrc={DATA}
                isHorizontal={false}
                listTitle="Completed Shares"
                listElementType="CompletedShare"
                flex={12}
            />
        </SafeAreaView>
    );
}

const mapStateToProps = (state) => {
    return {
        accentColor: state.prefs.accentColor,
        userName: state.prefs.userName,
        userProfileIcon: state.prefs.userProfileIcon,
        connectionRole: state.connection.role
    }
}

export default connect(mapStateToProps)(ReceiveScreen); 