import React, { Component } from 'react';

import {
    SafeAreaView,
} from 'react-native';

import FloatingList from './floatingList';

export default function SendScreen() {
    return (
        <SafeAreaView>
            <FloatingList 
                isHorizontal={true}
                listTitle="Nearby Users"
                listElementType="UserAvatar"
                listBackground="#FDFDFD"
                titleBackground="#519657"
            />
            <FloatingList 
                isHorizontal={false}
                listTitle="Files"
                listElementType="FileItem"
                titleBackground="#519657"
                listBackground="#FDFDFD"
            />
        </SafeAreaView>
    );
}