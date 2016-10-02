/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDA2O-uRbNipOS3iKo5qRAg3Xd46u67Bg0",
  authDomain: "samplesserver.firebaseapp.com",
  databaseURL: "https://samplesserver.firebaseio.com",
  storageBucket: "samplesserver.appspot.com"
};




const a =10;
class AwesomeProject extends Component {

  constructor(){
    super();
    firebase.initializeApp(firebaseConfig)
    this.state={
      name : '',
      email : '',
      phone : '',
      erromesaage :'random erromesaage'
    }



  }





  componentWillMount(){
    //console .log("W")
      var email= 'muneer@gmail.com'
      var password = '123456789'
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(
        (result)=>{alert("Logged In")},
        (error)=>{alert(error)}
        )
      

    
  }

  






  render() {
    return (
      <View>
        
        <View style={{
          height : 60,
          backgroundColor : 'skyblue',
          alignItems : 'center',
          //flexDirection : 'row',
          justifyContent : 'center',
          paddingTop :20


        }}>
        <Text style={{
          fontSize : 20,
          color : 'white',
          flex : 1

        }}>Status Bar</Text>
        </View>


        <ScrollView style={{
          //backgroundColor : 'red',
          //height : 200,
          //flex : 9
        }}>
          <View style = {{
            //paddingR : 40,
            alignItems :'center',
            borderColor : 'black',
            borderWidth : 1,
            justifyContent :'center'
          
        }}>
          <Text>Register Box</Text>


          <View style={{flexDirection: 'row'}}>
          <View style={{
            flexDirection : 'column',
            alignItems : 'center',
           justifyContent : 'center',
           marginRight : 10,
           //borderColor :'black',
           //borderWidth : 1
          }}>
          <Text style={{fontSize : 20}}>Name : </Text>
          </View>
          <TextInput
          style={{
            width : 200,
            height : 30,
            borderColor :'black',
            borderWidth : 1,
            padding : 5,
            alignSelf : 'center',
            borderRadius :5

          }}
          placeholder = "Name"
          value = {this.state.name}
          onChangeText={(text)=>{
            this.setState({name : text})
          }}
          ></TextInput>
          </View>



          


          <View style={{flexDirection: 'row'}}>
          <View style={{
            flexDirection : 'column',
            alignItems : 'center',
           justifyContent : 'center',
           marginRight : 10,
           //borderColor :'black',
           //borderWidth : 1
          }}>
          <Text style={{fontSize : 20}}>Email : </Text>
          </View>
          <TextInput

          value = {this.state.email}
          onChangeText={(text)=>{
            this.setState({email : text})
          }}
          style={{
            width : 200,
            height : 30,
            borderColor :'black',
            borderWidth : 1,
            padding : 5,
            alignSelf : 'center',
            borderRadius :5

          }}
          placeholder = "Email"
          ></TextInput>
          </View>



          <View style={{flexDirection: 'row'}}>
          <View style={{
            flexDirection : 'column',
            alignItems : 'center',
           justifyContent : 'center',
           marginRight : 10,
           //borderColor :'black',
           //borderWidth : 1
          }}>
          <Text style={{fontSize : 20}}>Phone Number : </Text>
          </View>
          <TextInput
          style={{
            width : 200,
            height : 30,
            borderColor :'black',
            borderWidth : 1,
            padding : 5,
            alignSelf : 'center',
            borderRadius :5

          }}
          placeholder = "Phone Number"
          ></TextInput>
          </View>
          
          
          </View>
          
        </ScrollView>

        <TouchableOpacity style={{

          backgroundColor : 'green',
          //width : 40,
          alignSelf : 'center',
          padding : 10,
          borderRadius : 5,
          marginTop :10
        }}
        
        onPress={
          ()=>{
            
          if(!this.state.email | !this.state.name){
            //alert("Please Enter the values")
            this.setState({erromesaage : "Please Enter A Value"})
            //a = "error"
          }else{
            alert("We are good")
            var email =  this.state.email
            var password =this.state.name

            firebase.auth().createUserWithEmailAndPassword(email,password)

            
          }    
          
        }
        }
        >

        <Text>Register</Text>
        
        </TouchableOpacity>

        <Text>{this.state.erromesaage}</Text>
        




      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
