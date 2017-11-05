import React from 'react';
import { StyleSheet, Text, View, Modal, Alert, TextInput, ImageBackground, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps'
import PrettyButton from './components/PrettyButton';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { name: '', distance: '', mapVisible: false, mapAnnotations: [] };
  }

  getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude
      let coordArray = [latitude, longitude]
      return coordArray
    });
  }

  // this.setState({ mapVisible: true })
  login = () => {
    if (this.state.name != '' && this.state.distance != '') {
      let url = 'http://www.jonathanhenriksen.com/'
      let fetchData = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: this.state.name,
          coordinates: [12.502635, 55.719345],
          distance: this.state.distance
        })
      }

      fetch(url, fetchData)
        .then(function (res) {
          return Alert.alert("" + res)
        })
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
          animationType="fade"
          transparent={false}
          visible={this.state.mapVisible}
          onRequestClose={() => { this.setState({ mapVisible: false }) }}
        >
          <View style={{ marginTop: 22 }}>
            <MapView
              style={{ flex: 1, margin: 40 }}
              showsUserLocation={true}
              followUserLocation={true}
              pitchEnabled={true}
            />
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
