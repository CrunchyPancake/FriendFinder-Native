import React from 'react';
import { StyleSheet, Text, View, MapView, Modal, Alert, TextInput } from 'react-native';
import PrettyButton from './components/PrettyButton';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { name: '', distance: '' };
  }

  login = () => {
    if (this.state.name != '' && this.state.distance != '' ) {
      Alert.alert("Success!")
    } else {
      Alert.alert('You need to fill out all fields')
    }
  }

  render() {
    return (
      <View style={styles.main_container}>

        <View style={styles.container_row}>
          <Text style={styles.text}>
            Nickname
          </Text>
          <TextInput style={styles.inputField} placeholder="Enter your name"
            onChangeText={(name) => this.setState({ name })} >
          </TextInput>
        </View>

        <View style={styles.container_row}>
          <Text style={styles.text}>
            Distance
          </Text>
          <TextInput keyboardType = 'numeric' style={styles.inputField} placeholder="Kilometers"
            onChangeText={(distance) => this.setState({ distance })} >
          </TextInput>
        </View>

        <View style={styles.container_row}>
          <PrettyButton title='Submit'
            onPress={() => this.login()} />
        </View>
      </View>


    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'linen',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  container_row: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  inputField: {
    height: 70,
    width: 170,
    fontSize: 20
  },
  text: {
    flex: 1,
    fontSize: 20,
    padding: 20,
    opacity: 0.6
  }

});
