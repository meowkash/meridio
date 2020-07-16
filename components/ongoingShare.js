import React, { Component } from 'react';

import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { ProgressBar, Colors } from 'react-native-paper';

import Images from '../assets/assetIndex';
import { theme } from '../defaults/theme';
import { DynamicStyleSheet, DynamicValue, useDynamicValue } from 'react-native-dynamic';

const dynamicStyles = new DynamicStyleSheet({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        paddingBottom: 4,
        paddingTop: 4,
        paddingRight: 0,
        paddingLeft: 10,
        borderBottomColor: '#A7A7A7'
    },
    progress: {
        alignItems: 'flex-start',
        flex: 5,
        marginHorizontal: 10,
        paddingLeft: 2,
        paddingRight: 2,
        color: new DynamicValue(theme.light.secondary, theme.dark.secondary)
    },
    items: {
        flex: 1.2,
        textAlign: 'right',
        marginRight: 10,
        paddingRight: 2,
        color: new DynamicValue(theme.light.secondary, theme.dark.secondary)
    },
    icon: {

    }
})

const OngoingShare = (props) => {
    const {
        userName,
        completedPercentage,
        itemsDone,
        itemsTotal,
    } = props;

    const styles = useDynamicValue(dynamicStyles);

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={Images.file[fileType]} style={styles.icon} />
                <ProgressBar style={styles.progress} progress={completedPercentage} />
                <Text style={styles.items}>
                    {itemsDone}/{itemsTotal}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

OngoingShare.defaultProps = {
    avatarIcon: 'user_male',
    userName: "AwesomeUser",
};

export default OngoingShare;