import { StyleSheet,  View, Image, TextInput, Text, Alert } from "react-native";

import { Button } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";

const logo = require("../Asets/Images/mylogo.svg.png");

const Place = require("../Asets/Images/fighters.png");

import { useState } from "react";

import axios from "axios";

import Toast from 'react-native-toast-message';

import { ScrollView } from "react-native";

const Reg = (props) => {

    const [formData, setFormData] = useState({

        username: '',

        name: '',

        date: '',

        password: ''

    });

    const handleSubmit = async () => {

        if (!formData.username || !formData.password || !formData.date || !formData.name) {

            Toast.show({

                type: 'error',

                text1: 'Place enter a valid data',

            });

            return;

        }

        if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(formData.username)) {

            Alert.alert(

                'Username should not start with a number, should not contain special characters except underscore(_), and must be case sensitive'
            );

            return;
        }

        if (!/^((0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4})$/.test(formData.date)) {

            Toast.show({

                type: 'error',

                text1: 'Date must be in a format dd-mm-yyyy',

            });

            return;
        }

        if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9a-zA-Z]).{8,}/.test(formData.password)

        ) {

            Toast.show({

                type: 'error',

                text1: 'Password must contain at least 8 characters, one uppercase letter, and one special character (!@#$%^&*)',

            });

            return;

        }

        try {

            const response = await axios.post('http://192.168.0.103:9889/reg', formData, {

                headers: {

                    'Content-Type': 'application/json',

                },

            });

            console.log(response.data);

            props.navigation.navigate('Loginpage')

        } catch (error) {

            if (error.response && error.response.status === 400) {

                console.error('provide valid data');

                Toast.show({

                    type: 'error',

                    text1: 'Provide a valid data',

                });

            } else if (error.response && error.response.status === 201) {

                console.error('added successfully');

               

            } else if (error.response && error.response.status === 409) {

                Toast.show({

                    type: 'error',

                    text1: 'Username alredy exists',

                });


            }
            else {
                console.log(error.message);
            }

        }

    };

    const handleChange = (key, value) => {

        setFormData({ ...formData, [key]: value });

    };

    return (     

        <ScrollView>

            <View style={{ height: 1050, backgroundColor: "#fff" }}>

                <View style={styles.part1}>

                    <Image source={logo} style={styles.img} />

                </View>

                <View style={styles.part2}>

                    <Text style={styles.part2title}>Welcome to <Text style={styles.part2colortitle}>Karona</Text></Text>

                </View>

                <View style={styles.part3} >

                    <SafeAreaView style={styles.form}>

                        <TextInput style={styles.part3input} placeholder="name" value={formData.name} onChangeText={(text) => handleChange('name', text)} />

                        <TextInput style={styles.part3input} placeholder="username" value={formData.username} onChangeText={(text) => handleChange('username', text)} />

                        <TextInput style={styles.part3input} placeholder="date" value={formData.date} onChangeText={(text) => handleChange('date', text)} />

                        <TextInput style={styles.part3input} placeholder="password" value={formData.password} onChangeText={(text) => handleChange('password', text)} />

                        <TextInput style={styles.part3input} placeholder="Re enter password" />

                        <Text style={styles.part4title1}>Verify Email</Text>

                        <Button onPress={handleSubmit} style={styles.submitbtndiv} ><Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Submit</Text></Button>

                    </SafeAreaView>

                </View>

                <View style={styles.part4} >

                    <Text style={styles.part4title1}>Alredy have an account? <Text style={styles.part4title} onPress={() => props.navigation.navigate('Loginpage')}>Login</Text></Text>

                </View>

                <View style={styles.part5}>

                    <Image source={Place} style={styles.img1} />

                </View>

                <Toast />

            </View>

        </ScrollView>


    )

}

const styles = StyleSheet.create({


    bodylogin:
    {

        height: "100%",

        backgroundColor: "#fff"

    },

    part1:
    {

        height: 300,

        width: "100%",

        justifyContent: 'center',

        alignItems: 'center',

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

        height: "40%",

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: "3%",



    },

    form:
    {

        height: 400,

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

        borderRadius: 15,

        paddingLeft: 15


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

        fontSize: 15,

        fontWeight: "bold"

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

        fontSize: 20,

        fontWeight: "bold"

    },
    part4title1:
    {

        fontSize: 20,

        fontWeight: "bold",

        color: "#000000"

    },

    submitbtndiv:
    {



        borderColor: "#1d9cf1cd",

        width: "90%",

        height: "10%",

        backgroundColor: "#1d9cf1cd"

    },

    part4:
    {

        height: "10%",

        justifyContent: "center",

        alignItems: "center",

    },

    part5:
    {

        height: "15%",

    },

    img1: {

        height: "112%",

        width: "60%"

    }


})

export default Reg

