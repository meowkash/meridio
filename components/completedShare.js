import React, { Component } from 'react';

import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

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
    name: {
        alignItems: 'flex-start',
        flex: 5,
        marginHorizontal: 10,
        paddingLeft: 2,
        paddingRight: 2,
        color: new DynamicValue(theme.light.secondary, theme.dark.secondary)
    },
    size: {
        flex: 1.2,
        textAlign: 'right',
        marginRight: 10,
        paddingRight: 2,
        color: new DynamicValue(theme.light.secondary, theme.dark.secondary)
    },
    icon: {
        flex: 1,
        height: 40,
        resizeMode: 'contain',
    }
})

const CompletedShare = (props) => {
    const {
        fileType,
        fileName,
        fileSize,
    } = props;

    const styles = useDynamicValue(dynamicStyles);

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={Images.file[fileType]} style={styles.icon} />
                <Text style={styles.name}>
                    {fileName}
                </Text>
                <Text style={styles.size}>
                    {fileSize}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

CompletedShare.defaultProps = {
    avatarIcon: 'user_male',
    userName: "AwesomeUser",
};

export default CompletedShare;