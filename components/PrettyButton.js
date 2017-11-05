import React, { Component } from 'react';
import { Text, TouchableHighlight, StyleSheet, Image } from 'react-native';

export default class PrettyButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress} activeOpacity={0.6} underlayColor={'transparent'}>
                <Image
                    style={styles.touchable}
                    source={require('../images/button.png')}>
                    <Text style={styles.text}>
                        {this.props.title}
                    </Text>
                </Image>
            </TouchableHighlight>
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

