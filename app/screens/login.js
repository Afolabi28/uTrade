// loginScreen.js
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, AppRegistry } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  input: {
    height: 50,
    width: 200,
    marginTop: 30,
    padding: 4,
    fontSize: 16,
    borderWidth: 1,
    borderColor:

  }
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Login extends Component {
  render() {
    return (
        <Image style={styles.image}
          source={require{'../../img/utradeLogo.png'}}
        />
        <TextInput style={styles.input}
          placeholder="Email Address"
        />
        <TextInput style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
    );
  }
}
