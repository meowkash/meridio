import React, { Component, useEffect, useState } from 'react';

import {
    SafeAreaView,
} from 'react-native';

import { connect } from "react-redux";

import FloatingList from './floatingList';
import { theme } from '../defaults/theme';
import { DynamicValue, DynamicStyleSheet, useDynamicValue, useDarkMode } from 'react-native-dynamic';
import MeridioHeader from './meridioHeader';
import { OverlayView } from './userPrefOverlay';

import CompletedShare from './completedShare';
import OngoingShare from './ongoingShare';

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
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        //name: 'First',
        //icon: 'selfish'
        type: 'doc',
        percent: 29,
        done: 79,
        total: 100
    },
    {
            id: 'bd7acbea-c1b1-46c2-aef5-3ad53abb28ba',
            //name: 'First',
            //icon: 'selfish'
            name: 'doc',
            percent: 29,
            done: 89,
            total: 100
        },
    /*{
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Second',
        icon: 'male'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third',
        icon: 'female'
    },*/
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
        accentColor
    } = props;

    const styles = useDynamicValue(dynamicStyles);

    const [overlayVisibility, setOverlayVisibility] = useState(false);

    const isDarkMode = useDarkMode();

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
    }
}

export default connect(mapStateToProps)(ReceiveScreen); 