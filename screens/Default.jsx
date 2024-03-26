import { StyleSheet, View, Image } from "react-native";

import React from "react";

import { Button, Text } from "react-native-paper";

const logo = require("../Asets/Images/mylogo.svg.png");

import Icon from 'react-native-vector-icons/AntDesign'

function Default(props) {

    console.log(props);

    return (

        <View>

            <View style={styles.bodyd}>

                <View style={styles.part1}>

                    <Image source={logo} style={styles.img} />

                </View>

                <View style={styles.part2}>

                    <Text style={styles.part2text}>  Lorem ipsum hi dolor sit.</Text>

                </View>

                <View style={styles.part3}>

                    <Text style={styles.part3title}>join today</Text>

                </View>

                <View style={styles.part4}>

                    <Button style={styles.part4btn}>

                        <Text style={{ color: "black",fontWeight:"bold" }}><Icon name="google" size={15} />   login with Google</Text>

                    </Button>

                    <Button style={styles.part4btn} >

                        <Text style={{ color: "black",fontWeight:"bold" }}><Icon name="apple1" size={15} />   login with Apple</Text>

                    </Button>

                </View>

                <View style={styles.part5}>

                    <Text style={{ fontSize: 15,fontWeight:"bold" }}>or</Text>

                </View>

                <View style={styles.part6}>

                    <Button onPress={()=>props.navigation.navigate("Reg")} style={styles.part6btn}  >

                        <Text style={styles.part6btntext}>Signup</Text>

                    </Button>

                </View>

                <View style={styles.part7}>

                    <Text style={styles.part7title}>Alredy have an account ?</Text>

                </View>

                <View style={styles.part6}>

                    <Button style={styles.part6btn} onPress={() => props.navigation.navigate('Loginpage')} >

                        <Text style={styles.part6btntext}>Login</Text>

                    </Button>

                </View>

            </View>

        </View>

    );

};



const styles = StyleSheet.create({

    bodyd: {

        height: "100%",

        width: "100%",

       backgroundColor:"#fff"

    },

    part1:
    {

        height: "40%",

        width: "100%",

        justifyContent: 'center',

        alignItems: 'center'

    },

    img:
    {
        height: 200,

        width: 200

    },

    part2:
    {

        height: "5%",

        alignItems: 'center',

        justifyContent: 'center',



    },

    part2text:
    {

        fontSize: 30,

        fontWeight: 'bold'

    },

    part3:
    {
        height: "5%",

        justifyContent: 'flex-end'

    },

    part3title:
    {

        fontWeight: 'bold',

        fontSize: 17,

        marginLeft: "7%"

    },

    part4:
    {

        height: "15%",

        width: "100%",

        justifyContent: "center",

        alignItems: 'center',

        justifyContent: 'space-evenly'

    },
    part4btn:
    {

        height: "35%",

        width: "90%",

        borderWidth: 1,

        borderColor: "#1d9cf1cd",

        justifyContent: 'center',

    },
    part5:
    {

        height: "2%",

        justifyContent: 'center',

        alignItems: 'center',

    },
    part6:
    {

        height: "5%",

        marginTop: "2%",

        alignItems: 'center',

    },

    part7:
    {

        height: "5%",

        marginTop: "5%",

        justifyContent: "center",

        alignItems: "center"


    },

    part7title:
    {

        fontWeight: 'bold',

        fontSize: 17,

        marginLeft: "7%"

    },

    part6btn:
    {


        backgroundColor: "#1d9cf1cd",

        width: "90%",

        height: "100%",

        justifyContent: "center",

        alignItems: "center"

    },
    part6btntext:
    {

        color: "#fff",
        
        fontWeight:"bold",

        width:"100%",

        height:"100%",

        paddingTop:15
        

    }






});

export default Default