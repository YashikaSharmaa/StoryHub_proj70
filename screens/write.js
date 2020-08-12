import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native';
import styles from '../styles.js';
import AppHeader from '../components/AppHeader';
import uri from '../images/uri';

export default class WritingScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      story:'',
      author:'',
      title:''
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <AppHeader />
            <Image source = {{uri:uri.write}} style = {styles.img} />
            <TextInput 
              style = {styles.input}
              placeholder = 'Title'
              value = {this.state.title}
              editable
              textAlignVertical = 'top'
            />
            <TextInput 
              style = {styles.input}
              placeholder = 'Author'
              value = {this.state.author}
              editable
              textAlignVertical = 'top'
            />
            <TextInput 
              style = {styles.inputS}
              placeholder = 'Your Story'
              value = {this.state.story}
              editable
              multiline = 'true'
              textAlignVertical = 'top'
            />
            <TouchableOpacity
              style = {styles.button}
              onPress = {
                console.log('pressed')
              }
            >
              <Text style = {styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    );
  }
}