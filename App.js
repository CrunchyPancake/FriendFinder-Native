import React from 'react';
import { StyleSheet, Text, View, MapView, Modal, Alert, TextInput, ImageBackground, TouchableHighlight } from 'react-native';
import PrettyButton from './components/PrettyButton';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { name: '', distance: '', mapVisible: false };
  }

  login = () => {
    if (this.state.name != '' && this.state.distance != '') {
      this.setState({ mapVisible: true })
    } else {
      Alert.alert('Error', 'You need to fill out all fields')
    }
  }

  render() {
    return (
      <ImageBackground style={styles.backgroundImage}
        source={require('./images/background.jpg')}>
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
            <TextInput keyboardType='numeric' style={styles.inputField} placeholder="Kilometers"
              onChangeText={(distance) => this.setState({ distance })} >
            </TextInput>
          </View>

          <View style={styles.container_row}>
            <PrettyButton title='Submit'
              onPress={() => this.login()} />
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.mapVisible}
          onRequestClose={() => { this.setState({mapVisible : false}) }}
          presentationStyle={'pageSheet'}
        >
          <View style={{ marginTop: 22 }}>
            <Text style={styles.text}>
              Test Modal
              </Text>
          </View>
        </Modal>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container_row: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  inputField: {
    height: 70,
    width: 220,
    fontSize: 20
  },
  text: {
    flex: 1,
    fontSize: 20,
    padding: 20,
    opacity: 0.6
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  }


});
