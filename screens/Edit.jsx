import { StyleSheet, View } from "react-native";

import { Text, TextInput } from "react-native-paper";

import Icon1 from 'react-native-vector-icons/AntDesign';

import { Image } from "react-native";

function Edit(props) {

    console.log(props);

    return (


        <View style={styles.editbody}>

            <View style={styles.edithadder}>

                <View style={styles.edithadderpart1}>

                    <Icon1 onPress={() => props.navigation.navigate('Profile')} name="arrowleft" size={25} />

                </View>

                <View style={styles.edithadderpart2}>

                    <Text style={styles.part2titledit}>Edit Profile</Text>

                </View>

                <View style={styles.edithadderpart3}>

                <Icon1  name="check" size={30} color={"#1d9cf1cd"} />

                </View>

            </View>

            <View style={styles.edit2}>


                <Image style={styles.userdp} source={require('../Asets/Images/dpp.png')} />

            </View>

            <View style={styles.edit3}>

                <Text style={styles.edit3text}>Edit picture</Text>

            </View>

            <View style={styles.edit4}>

                <TextInput style={styles.edit4input} placeholder="Name"></TextInput>

            </View>

            <View style={styles.edit4}>

                <TextInput style={styles.edit4input} placeholder="User Name"></TextInput>

            </View>

            <View style={styles.edit41}>

                <TextInput style={styles.edit4input} placeholder="Bio"></TextInput>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    editbody:
    {

        height: "100%",

        width: "100%",

        backgroundColor: "#fff",

    },
    edithadder:
    {

        height: "7%",

        flexDirection: "row"

    },
    edithadderpart1:
    {

        height: "100%",

        width: "10%",


        justifyContent: "center",

        alignItems: "flex-end"

    },
    edithadderpart2:
    {

        height: "100%",

        width: "30%",


        justifyContent: "center",

        marginLeft: "2%"

    },
    part2titledit:
    {

        fontSize: 30,

        fontWeight:"bold"

    },

    edithadderpart3:
    {

          height:"100%",

          width:"56%",

          justifyContent:"center",

          alignItems:'flex-end'

    },

    edit2:
    {

        height: "10%",

        width: "100%",

        alignItems: "center"

    },

    userdp:
    {

        height: 100,

        width: 100

    },

    edit3:
    {

        height: "3%",

        width: "100%",


        alignItems: "center"

    },

    edit3text:
    {

        fontSize: 20,

        color: "#1d9cf1cd"

    },

    edit4:
    {

        height: "5%",

        width: "100%",

        alignItems: "center"

    },
    edit41:
    {

        height: "7%",

        width: "100%",


        alignItems: "center"

    },

    edit4input:
    {

        height: "90%",

        width: "90%"

    },

    edit5:
    {

        height: "3%",

        width: "100%",

        paddingLeft: "5%"

    },

    edit5text:
    {

        fontSize: 20

    }


})

export default Edit



