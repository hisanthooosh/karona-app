import { StyleSheet, View, Image } from "react-native";

import { Button, Text, TextInput } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";

const logo = require("../Asets/Images/mylogo.svg.png");

const Place = require("../Asets/Images/king.png");


function Verifyemail() {

    return (

        <View style={styles.bodylogin}>

            <View style={styles.part1}>

                <Image source={logo} style={styles.img} />

            </View>

            <View style={styles.part2}>

                <Text style={styles.part2title}>Verify email with <Text style={styles.part2colortitle}>Karona</Text></Text>

            </View>

            <View style={styles.part3} >

                <SafeAreaView style={styles.form}>

                    <TextInput keyboardType="number" style={styles.part3input} placeholder="Email" />

                    <Button style={styles.codebtn} ><Text style={styles.loginbtntitle}>Get Code</Text></Button>

                    <TextInput keyboardType="number" style={styles.part3input} placeholder="O T P" />



                    <Button style={styles.loginbtn} ><Text style={styles.loginbtntitle}>Next</Text></Button>

                </SafeAreaView>



            </View>

            <View style={styles.part4}>

                <Text style={styles.part4title1}>Alredy have an account? <Text style={styles.part4title}>Login</Text></Text>

            </View>

            <View style={styles.part5}>

                <Image source={Place} style={styles.img1} />

            </View>


        </View>


    )

}

const styles = StyleSheet.create({


    bodylogin:
    {

        height: "100%",

        // width: "100%",

        // borderWidth: 1,

        // borderColor: "red"

        backgroundColor: "#fff"

    },

    part1:
    {

        height: "40%",

        width: "100%",

        justifyContent: 'center',

        alignItems: 'center',

        // borderWidth: 1,

        borderColor: "black",
    },

    img:
    {
        height: 200,

        width: 200

    },

    part2:
    {

        height: "5%",

        width: "100%",

        //   borderWidth:1,

        alignItems: 'center',


    },
    part2title:
    {

        fontSize: 30,



    },
    part2colortitle:
    {

        fontSize: 30,

        color: "#1d9cf1cd",

    },

    part3:
    {

        height: "30%",

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: "3%",



    },

    form:
    {

        height: "100%",

        width: "95%",

        justifyContent: "center",

        alignItems: 'center',

        justifyContent: "space-evenly",






    },
    part3input:
    {
        width: "90%",

        borderWidth: 1,

        borderColor: "#1d9cf1cd",

        backgroundColor: "#fff",


    },

    loginbtn:
    {

        width: "90%",

        height: "14%",

        justifyContent: "center",

        alignItems: "center",

        backgroundColor: "#1d9cf1cd",


    },

    codebtn:
    {

        width: "40%",

        height: "14%",

        justifyContent: "center",

        alignItems: "center",

        backgroundColor: "#1d9cf1cd",


    },

    loginbtntitle:

    {

        color: "#fff",

        fontSize: 15

    },

    part4:
    {

        height: "7%",

        width: "100%",

        justifyContent: "center",

        alignItems: "center",

        borderWidth: 1,

    },
    part4title:
    {

        color: "#1d9cf1cd",

        fontSize: 20

    },
    part4title1:
    {

        fontSize: 20

    },

    part4:
    {

        height: "10%",

        justifyContent: "center",

        alignItems: "center",

    },

    part5:
    {

        height: "12%",

    },

    img1: {

        height: "112%",

        width: "60%"

    }


})

export default Verifyemail