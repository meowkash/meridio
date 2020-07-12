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

const container = (backgroundColor, borderColor) => {
    return {
        borderColor,
        backgroundColor,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        margin: 8,
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
    };
};

const _largeTitleStyle = (fontColor, fontSize, fontWeight) => {
    return {
        fontSize,
        fontWeight,
        lineHeight: 41,
        color: fontColor,
        letterSpacing: Platform.OS === "ios" ? 0.41 : undefined
    };
};

const styles = {
    avatar: {
        height: 43,
        width: 43,
        borderRadius: 43 / 2
    },
    avatarContainerStyle: {
        alignSelf: "center",
        justifyContent: "center"
    }
};

const MeridioHeader = (props) => {
    const {
        onPress,
        largeTitle,
        avatarStyle,
        imageSource,
        containerStyle,
        largeTitleStyle,
        borderColor,
        backgroundColor,
        largeTitleFontSize,
        largeTitleFontColor,
        largeTitleFontWeight,
    } = props;
    return (
        <View style={containerStyle || container(backgroundColor, borderColor)}>
            <TouchableOpacity style={styles.avatarContainerStyle} onPress={onPress}>
                <Text>Logo</Text>
            </TouchableOpacity>
            <View>
                <Text
                    style={
                        largeTitleStyle ||
                        _largeTitleStyle(
                            largeTitleFontColor,
                            largeTitleFontSize,
                            largeTitleFontWeight
                        )
                    }
                >
                    {largeTitle}
                </Text>
            </View>
            <TouchableOpacity style={styles.avatarContainerStyle} onPress={onPress}>
                <Ionicons size={38} name="ios-person-circle" color="steelblue"> </Ionicons>
            </TouchableOpacity>
        </View>
    );
};

MeridioHeader.propTypes = {
    largeTitle: PropTypes.string,
    backgroundColor: PropTypes.string,
    largeTitleFontSize: PropTypes.number,
    largeTitleFontColor: PropTypes.string,
    largeTitleFontWeight: PropTypes.string,
};

MeridioHeader.defaultProps = {
    largeTitle: "Meridio",
    largeTitleFontSize: 30,
    borderColor: "#EFEFF4",
    avatarStyle: styles.avatar,
    largeTitleFontWeight: "300",
    backgroundColor: "transparent",
    containerStyle: styles.container,
    largeTitleStyle: styles.largeTitleStyle,
};

export default MeridioHeader;