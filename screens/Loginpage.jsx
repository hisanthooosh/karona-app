
import { StyleSheet, Image, View, Text, TextInput } from 'react-native';

import { Button } from "react-native-paper";

const logo = require("../Asets/Images/mylogo.svg.png");

const Women = require("../Asets/Images/women.png.png");

import axios from 'axios';

import { useState } from 'react';

import { ScrollView } from 'react-native';

import Toast from 'react-native-toast-message';

import AsyncStorage from '@react-native-async-storage/async-storage';

function Loginpage({navigation}) {


  const [loginData, setLoginData] = useState({

    username: '',

    password: ''

  });

  const handleChange = (key, value) => {

    setLoginData({ ...loginData, [key]: value });

  };

  const handleSubmit = async () => {

    if (!loginData.username || !loginData.password) {

      Toast.show({

        type: 'error',

        text1: 'Please enter username and password',

      });

      return;
    }

    try {

      const response = await axios.post('http://192.168.0.103:9889/login', loginData, {

        headers: {

          'Content-Type': 'application/json',

        },

      });

      console.log(response.data);

      navigation.navigate('Home', {username: loginData.username})

      await AsyncStorage.setItem('username',loginData.username)

    } catch (error) {

      if (error.response && error.response.status === 200) {

        Toast.show({

          type: 'error',

          text1: 'User not found',

        });

      } else if (error.response && error.response.status === 401) {

        Toast.show({

          type: 'error',
          
          text1: 'Incorrect password',
          
        });

      } else if (error.response && error.response.status === 404) {

        Toast.show({

          type: 'error',
          
          text1: 'User not found',
          
        });

      } else if (error.response && error.response.status === 204) {

        Toast.show({

          type: 'error',
          
          text1: 'Empty data',
          
        });

      } else {

        Toast.show({

          type: 'error',
          
          text1: 'An error occured',
          
        });
        console.log(error.message);

      }
    }
  };

  return (


    <ScrollView >

      <View style={{ height:1050, backgroundColor:"#fff"}}>

        <View style={styles.part1}>

          <Image source={logo} style={styles.img} />

        </View>

        <View style={styles.part2}>

          <Text style={styles.part2title}>Login to <Text style={styles.part2colortitle}>Karona</Text></Text>

        </View>

        <View style={styles.part3} >

          <View style={styles.form}>

            <TextInput onChangeText={(text) => handleChange('username', text)} style={styles.part3input} value={loginData.username} placeholder="Username" />

            <TextInput onChangeText={(text) => handleChange('password', text)} style={styles.part3input} value={loginData.password} placeholder="Password" />

            <Text style={{ fontWeight: "bold", color: "#000000" }}>Forgot Password?</Text>

            <Button style={styles.btnlogin} onPress={handleSubmit} ><Text style={{ fontWeight: "bold", color: "#fff",padding:20 }}>Submit</Text></Button>



          </View>

        </View>

        <View style={styles.part4}>

          <Text style={styles.part4title1}>Don't have an account? <Text style={styles.part4title}onPress={()=>props.navigation.navigate('Reg')}>Sign Up</Text></Text>

        </View>

        <View style={styles.part5}>

          <Image source={Women} style={styles.img1} />

        </View>

        
        <Toast />

      </View>

    </ScrollView>

  )

}

const styles = StyleSheet.create({



  sbody:
  {


    height: "100%",

    backgroundColor: "#fff"

  },

  bodylogin:
  {

    height: "100%",



    width: "100%",

    borderWidth: 1,

    backgroundColor: "#fff"

  },

  part1:
  {

    height: 300,

    width: "100%",

    justifyContent: 'center',

    alignItems: 'center',

    borderColor: "black"
  },

  img:
  {
    height: 200,

    width: 200

  },

  part2:
  {

    height: 50,

    width: "100%",

    alignItems: 'center',



  },
  part2title:
  {

    fontSize: 30,

    fontWeight: "bold",

    color: "#000000"

  },
  part2colortitle:
  {

    fontSize: 30,

    color: "#1d9cf1cd",

    fontWeight: "bold"

  },

  part3:
  {

    height: 330,

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: "3%"

  },

  form:
  {

    height: "100%",

    width: "95%",

    justifyContent: "center",

    alignItems: 'center',

    justifyContent: "space-evenly",

    backgroundColor: "#fff"



  },
  part3input:
  {
    width: "90%",

    borderWidth: 1,

    borderColor: "#1d9cf1cd",

    backgroundColor: "#fff",

    borderRadius: 20,

    paddingLeft: 10

  },
  btnlogin:
  {

    width: "85%",

    height: "15%",

    backgroundColor: "#1d9cf1cd",

    paddingTop:5

    

  },

  loginbtn:
  {

    width: "90%",

    height: "14%",

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: "#1d9cf1cd",


  },

  loginbtntitle:

  {

    color: "#fff",

    fontSize: 15,

    fontWeight: "bold"

  },

  part4:
  {

    height: "5%",

    width: "100%",

    justifyContent: "center",

    alignItems: "center"

  },
  part4title:
  {

    color: "#1d9cf1cd",

    fontSize: 20,

    fontWeight: "bold",


  },
  part4title1:
  {

    fontSize: 20,

    fontWeight: "bold",

    color: "#000000"

  },

  part5:
  {

    height: 250,

    marginTop:60

  },

  img1: {

    height: "100%",

    width: "100%"

  }

})

export default Loginpage