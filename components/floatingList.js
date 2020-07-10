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
        borderBottomWidth: 3,
        alignItems: "flex-start",
        justifyContent: "space-between"
    };
};

const styles = {
    heading: {
        fontSize: 18,
        marginHorizontal: 8,
        backgroundColor: "silver",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingLeft: 10,
        paddingBottom: 4,
        paddingTop: 4
    },
    listStyle: {
        marginHorizontal: 8,
        paddingTop: 4,
        backgroundColor: "silver",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingLeft: 10,
        paddingBottom: 4,
        marginBottom: 10
    }
};

function ListItem(item, index, separators) {
    switch (listElementType) {
        case 'UserAvatar':
            return (<UserAvatar
                id={item.id}
                icon={item.icon}
                name={item.name}
            />);
        case 'FileItem':
            return (<FileItem
                id={item.id}
                icon={item.icon}
                name={item.name}
            />);
    }
}

const FloatingList = (props) => {
    const {
        dataSrc,
        listTitle,
        isHorizontal,
        listElementType,
        listTitleStyle,
        borderColor,
        backgroundColor,
        listTitleFontSize,
        listTitleFontColor,
        listTitleFontWeight,
    } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                {listTitle}
            </Text>

            <FlatList
                horizontal={isHorizontal}
                style={styles.listStyle}
                data={dataSrc}
                renderItem={({ item, index, separators }) => (
                    <UserAvatar
                        id={item.id}
                        icon={item.icon}
                        name={item.name}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

FloatingList.propTypes = {
    listTitle: PropTypes.string,
    backgroundColor: PropTypes.string,
    listTitleFontSize: PropTypes.number,
    listTitleFontColor: PropTypes.string,
    listTitleFontWeight: PropTypes.string,
    isHorizontal: PropTypes.bool
};

FloatingList.defaultProps = {
    listTitle: "Meridio",
    listTitleFontSize: 30,
    isHorizontal: false,
    borderColor: "#EFEFF4",
    dataSrc: { DATA },
    avatarStyle: styles.avatar,
    listTitleFontWeight: "300",
    backgroundColor: "transparent",
    containerStyle: styles.container,
    listTitleStyle: styles.largeTitleStyle,
};

export default FloatingList;