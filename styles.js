import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' ,
        backgroundColor:'#f8f8f8'
    },
    button: {
      marginTop:10,
      borderRadius:10,
      width:100,
      height:25,
      borderWidth:0.25,
      borderColor:'grey',
      backgroundColor:'pink'
    },
    buttonText: {
      fontWeight:'bold',
      textAlign:'center',
      marginTop:2.5
    },
    input: { 
      borderColor: 'gray', 
      borderWidth: 1.25,
      width:300, 
      marginTop:15 
    },
    inputS: { 
      borderColor: 'gray', 
      borderWidth: 1.25,
      width:300, 
      marginTop:15,
      height:175
    },
    img: {
      width:80,
      height:100,
    }
});

export default styles