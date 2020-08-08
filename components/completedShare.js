import React from 'react';

import {
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

import Images from '../assets/assetIndex';

import { theme } from '../defaults/theme';

import { DynamicStyleSheet, DynamicValue, useDynamicValue, useDarkMode } from 'react-native-dynamic';

import Icon from 'react-native-vector-icons/Ionicons';

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
        flex: 3,
        marginHorizontal: '1%',
        fontSize: 15,
        height: 50,
        justifyContent: 'center',
        textAlignVertical: 'center',
        paddingLeft: 2,
        paddingRight: 2,
        color: new DynamicValue(theme.light.secondary, theme.dark.secondary)
    },
    totalFiles: {
        flex: 3,
        textAlign: 'right',
        marginRight: '2%',
        paddingRight: 2,
        color: new DynamicValue(theme.light.secondary, theme.dark.secondary)
    },
    icon: {
        flex: 1,
        height: 50,
        resizeMode: 'contain',
        marginLeft: '1%',
        marginRight: '1%'
    },
    expandItem: {
        flex: 0.5,
        height: 50,
        justifyContent: 'center',
        marginRight: '2%',
    }
})

const CompletedShare = (props) => {
    const {
        userIcon,
        userName,
        totalFiles,
        shareType
    } = props;

    const styles = useDynamicValue(dynamicStyles);

    const isDarkMode = useDarkMode();

    return (
        <TouchableOpacity>

            <View style={styles.container}>
                <Image source={Images.user[userIcon]} style={styles.icon} />
                <Text style={styles.name}>
                    {userName}
                </Text>
                <Text style={styles.totalFiles}>
                    {totalFiles} Files {shareType}
                </Text>
                <TouchableOpacity style={styles.expandItem}>
                    <Icon name="information-circle-outline" size={20} color={isDarkMode ? theme.dark.tertiary : theme.light.tertiary}> </Icon>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}

export default CompletedShare;