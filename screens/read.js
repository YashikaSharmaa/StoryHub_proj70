import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native';
import styles from '../styles.js';
import AppHeader from '../components/AppHeader';
import uri from '../images/uri'

export default class ReadingScreen extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <AppHeader />
            <Image source={require("../images/read1.jpg")} style = {styles.img} />
            <Text>READ A STORY</Text>
          </View>
        );
    }
}