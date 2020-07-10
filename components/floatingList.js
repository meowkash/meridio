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

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'First Item',
        icon: '0'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Second Item',
        icon: '1'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third Item',
        icon: '2'
    },
]

// Stylesheets
const heading = (bgColor, fgColor) => {
    return {
        fontSize: 16,
        marginHorizontal: 8,
        backgroundColor: bgColor,
        color: fgColor,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingLeft: 12,
        paddingBottom: 4,
        paddingTop: 4,
        lineHeight: 30,
    };
}
const listStyle = (bgColor) => {
    return {
        marginHorizontal: 8,
        paddingTop: 4,
        backgroundColor: bgColor,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingLeft: 10,
        paddingBottom: 4,
        marginBottom: 10,
    };
}
const emptyList = (bgColor, listHeight) => {
    return {
        textAlign: "center",
        
    };
}
const container = (viewHeight) => {
    return {
        height: viewHeight,
        textAlign: "center",
    };
}

// Intelligently select the type of item in the list to be rendered
ListItem = (item, index, separators, listComponentType) => {
    switch (listComponentType) {
        case 'UserAvatar':
            return (
                <UserAvatar
                    id={item.id}
                    icon={item.icon}
                    name={item.name}
                />
            );
        case 'FileItem':
            return (
                <FileItem
                    id={item.id}
                    icon={item.icon}
                    name={item.name}
                />
            );
        default:
            return (
                <Text> {listComponentType} {item.name} </Text>
            );
    }
}

// Default view for when there is nothing in the list
ListEmptyView = (emptyMessage, listBackground, listHeight) => {
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
        listBackground,
        titleBackground,
        titleColor,
        height,
    } = props;

    return (
        <View style={container(height)}>
            <Text style={heading(titleBackground, titleColor)}>
                {listTitle}
                <Ionicons name="chevron-forward"> </Ionicons>
            </Text>
            <FlatList
                horizontal={isHorizontal}
                style={listStyle(listBackground)}
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
    titleBackground: "steelblue",
    listBackground: "silver",
    titleColor: "white",
    dataSrc: [],
    emptyMessage: "Sorry, nothing here",
    height: 100,
};

export default FloatingList;