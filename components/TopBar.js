import React, { Component } from 'react';
import { Text, TouchableHighlight, StyleSheet, Image } from 'react-native';

export default class TopBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View> 
                
            </View>

        )
    }
}

const styles = StyleSheet.create({
    touchable: {
        height: 70,
        width: 180,
        opacity: 0.8,
        alignItems: 'center'

    },
    text: {
        flex: 1,
        fontSize: 20,
        padding: 20,
        opacity: 0.6
    }
})

