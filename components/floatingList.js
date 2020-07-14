import React from "react";
import PropTypes from "prop-types";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    SafeAreaView,
    ScrollView,
    FlatList
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import UserAvatar from './userItem';
import FileItem from './fileItem';
import { theme } from '../defaults/theme';
import { useDarkMode, DynamicStyleSheet, DynamicValue, useDynamicValue } from 'react-native-dynamic';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'First Item',
        icon: 'user_selfish'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Second Item',
        icon: 'user_male'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third Item',
        icon: 'user_female'
    },
]

// Stylesheets
const emptyList = (bgColor, listHeight) => {
    return {
        textAlign: "center",
    };
}
const container = (viewHeight) => {
    return {
        height: viewHeight,
        textAlign: "center",
        marginBottom: "1%",
        marginTop: "1%",
        // backgroundColor: 'black',
    };
}
const dynamicStyles = new DynamicStyleSheet({
    container: {
        // backgroundColor: new DynamicValue(theme.light.background, theme.dark.background)
    },
    listStyle: {
        marginHorizontal: 8,
        backgroundColor: new DynamicValue(theme.light.secondaryBackground, theme.dark.secondaryBackground),
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingBottom: 4,
        marginBottom: "1%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    heading: {
        backgroundColor: new DynamicValue(theme.light.accent, theme.dark.accent),
        fontSize: 16,
        marginHorizontal: 8,
        color: new DynamicValue(theme.light.primary, theme.dark.primary),
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingLeft: 12,
        marginTop: '1%',
        paddingBottom: 4,
        paddingTop: 4,
        lineHeight: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }
})

// Intelligently select the type of item in the list to be rendered
const ListItem = (props) => {
    const {
        item,
        listComponentType
    } = props;

    switch (listComponentType) {
        case "UserAvatar":
            return (
                <UserAvatar
                    id={item.id}
                    avatarIcon={item.icon}
                    userName={item.name}
                />
            );
        case 'FileItem':
            return (
                <FileItem
                    id={item.id}
                    fileType={item.type}
                    fileName={item.name}
                    fileSize={item.size}
                />
            );
        default:
            return (
                <Text> {listComponentType} {item.name} </Text>
            );
    }
}

// Default view for when there is nothing in the list
const ListEmptyView = (emptyMessage, listBackground, listHeight) => {
    return (
        <View style={emptyList(listBackground, listHeight)}>
            <Text style={{ textAlign: 'center' }}> {emptyMessage} </Text>
        </View>

    );
}

const FloatingList = (props) => {
    const {
        dataSrc,
        listTitle,
        isHorizontal,
        listElementType,
        emptyMessage,
        height,
    } = props;

    const styles = useDynamicValue(dynamicStyles);

    return (
        <View style={[container(height), styles.container]}>
            <Text style={styles.heading}>
                {listTitle}
                <Ionicons name="chevron-forward"> </Ionicons>
            </Text>
            <FlatList
                horizontal={isHorizontal}
                style={styles.listStyle}
                data={dataSrc}
                renderItem={({ item, index, separators }) => (
                    <ListItem
                        item={item}
                        listComponentType={listElementType}
                    />
                )}
                ListEmptyComponent={ListEmptyView(emptyMessage)}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

FloatingList.propTypes = {
    listTitle: PropTypes.string,
    isHorizontal: PropTypes.bool,
    listElementType: PropTypes.string
};

FloatingList.defaultProps = {
    listTitle: "Meridio",
    isHorizontal: false,
    dataSrc: [],
    emptyMessage: "Sorry, nothing here",
    height: 100,
};

export default FloatingList;