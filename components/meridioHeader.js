import React from "react";
import PropTypes from "prop-types";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../defaults/theme';
import Images, { imageList } from '../assets/assetIndex';
import { connect, useDispatch } from "react-redux";
import { DynamicStyleSheet, DynamicValue, useDynamicValue } from 'react-native-dynamic';

const dynamicStyle = new DynamicStyleSheet({
    container: {
        backgroundColor: new DynamicValue(theme.light.secondaryBackground, theme.dark.secondaryBackground),
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        marginHorizontal: 12,
        marginTop: '3%',
        marginBottom: '2%',
        borderRadius: 10,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        alignItems: "center",
        justifyContent: "space-between",
    },
    avatar: {
        height: 43,
        width: 43,
        borderRadius: 43 / 2
    },
    avatarContainerStyle: {
        alignSelf: "center",
        justifyContent: "center"
    },
    titleStyle: {
        color: new DynamicValue(theme.light.primary, theme.dark.primary),
    }
})

const _largeTitleStyle = (fontSize, fontWeight) => {
    return {
        fontSize,
        fontWeight,
        lineHeight: 41,
        letterSpacing: Platform.OS === "ios" ? 0.41 : undefined
    };
};

const container = (viewFlex) => {
    return {
        flex: viewFlex,
    };
}

const MeridioHeader = (props) => {
    const {
        onPress,
        largeTitle,
        avatarStyle,
        containerStyle,
        largeTitleStyle,
        borderColor,
        largeTitleFontSize,
        largeTitleFontColor,
        largeTitleFontWeight,
        flex,
        userProfileIcon
    } = props;

    const styles = useDynamicValue(dynamicStyle);

    return (
        <View style={[container(flex), styles.container]}>
            <TouchableOpacity style={styles.avatarContainerStyle} onPress={onPress}>
                <Text style={{color: theme.light.accent}}>Logo</Text>
            </TouchableOpacity>
            <View>
                <Text
                    style={[styles.titleStyle, _largeTitleStyle(largeTitleFontSize, largeTitleFontWeight)]}
                >
                    {largeTitle}
                </Text>
            </View>
            <TouchableOpacity style={styles.avatarContainerStyle} onPress={onPress}>
                <Image source={Images.user[userProfileIcon]} style={{ height: 40, width: 40, marginRight: 10 }} />
            </TouchableOpacity>
        </View>
    );
};

MeridioHeader.propTypes = {
    largeTitle: PropTypes.string,
    largeTitleFontSize: PropTypes.number,
    largeTitleFontColor: PropTypes.string,
    largeTitleFontWeight: PropTypes.string,
};

MeridioHeader.defaultProps = {
    largeTitle: "Meridio",
    largeTitleFontSize: 30,
    largeTitleFontWeight: "300",
};

const mapStateToProps = (state) => {
    return {
        userProfileIcon: state.prefs.userProfileIcon,
    }
}

export default connect(mapStateToProps)(MeridioHeader);