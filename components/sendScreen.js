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
            />
            <FloatingList 
                isHorizontal={false}
                listTitle="Files"
                listElementType="FileItem"
            />
        </SafeAreaView>
    );
}