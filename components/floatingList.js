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
import OngoingShare from './ongoingShare';
import CompletedShare from './completedShare';

import { theme } from '../defaults/theme';
import { useDarkMode, DynamicStyleSheet, DynamicValue, useDynamicValue } from 'react-native-dynamic';

// Stylesheets
const container = (viewFlex) => {
    return {
        flex: viewFlex,
        textAlign: "center",
        marginBottom: "2%",

    };
}
const dynamicStyles = new DynamicStyleSheet({
    container: {
        backgroundColor: new DynamicValue(theme.light.background, theme.dark.background)
    },
    listStyle: {
        marginHorizontal: 8,
        backgroundColor: new DynamicValue(theme.light.tertiaryBackground, theme.dark.tertiaryBackground),
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingBottom: 4,
        paddingTop: 4,
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
        borderBottomRightRadius: 2.5,
        borderBottomLeftRadius: 2.5,
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

const emptyListDynamic = new DynamicStyleSheet({
    container: {
        textAlign: "center",
        alignSelf: "center",
        textAlignVertical: "center",
        flex: 1
    },
    text: {
        color: new DynamicValue(theme.light.secondary, theme.dark.secondary),
        //color: 'white',
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flex: 1,
        backgroundColor: 'white'
        //backgroundColor: 'black'
    }
});

// Default view for when there is nothing in the list
const ListEmptyView = (emptyMessage) => {
    const emptyListStyles = useDynamicValue(emptyListDynamic);
    return (
        <View style={emptyListStyles.container}>
            <Text style={emptyListStyles.text}> {emptyMessage} </Text>
        </View>

    );
}

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
        case 'OngoingShare':
            return (
                <OngoingShare
                    /*id={item.id}
                    avatarIcon={item.icon}
                    userName={item.name}*/
                    userName={item.type}
                    completedPercentage={item.percent}
                    itemsDone={item.done}
                    itemsTotal={item.total}
                />
            );
        case 'CompletedShare':
            return (
                <CompletedShare
                    id={item.id}
                    avatarIcon={item.icon}
                    userName={item.name}
                />
            );
        default:
            return (
                <Text> {listComponentType} {item.name} </Text>
            );
    }
}

const FloatingList = (props) => {
    const {
        dataSrc,
        listTitle,
        isHorizontal,
        listElementType,
        emptyMessage,
        flex,
    } = props;

    const styles = useDynamicValue(dynamicStyles);

    return (
        <View style={[container(flex), styles.container]}>
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