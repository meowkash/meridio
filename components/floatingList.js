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

const heading = (bgColor, fgColor) => {
    return {
        fontSize: 18,
        marginHorizontal: 8,
        backgroundColor: bgColor,
        color: fgColor,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingLeft: 10,
        paddingBottom: 4,
        paddingTop: 4
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
        marginBottom: 10
    },
};

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

ListEmptyView = (emptyMessage) => {
    return (
        <View style={styles.emptyList}>
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
        borderColor,
        listBackground,
        titleBackground,
        titleColor,
    } = props;

    return (
        <View>
            <Text style={heading(titleBackground, titleColor)}>
                {listTitle}
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
    borderColor: "#EFEFF4",
    titleBackground: "steelblue",
    listBackground: "silver",
    titleColor: "white",
    dataSrc: [],
    emptyMessage: "Sorry, nothing here",
    avatarStyle: styles.avatar,
};

export default FloatingList;