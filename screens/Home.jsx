import { StyleSheet, View,  Modal} from "react-native";

import { useState } from "react";

import { Text ,Button} from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";

import { Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome6";

import Icon1 from 'react-native-vector-icons/AntDesign'

import Icon2 from 'react-native-vector-icons/Ionicons'

import Icon3 from 'react-native-vector-icons/Octicons'

import Icon4 from 'react-native-vector-icons/AntDesign'

import Icon5 from 'react-native-vector-icons/Foundation'

function Home(props) {

    const [isModelVisible, setIsModelVisible] = useState(false)

    console.log(props);

    

    return (


        <View style={style.homebody}    >



            <SafeAreaView style={style.homehadder}>


                <View style={style.hadderpart1} >

                    <Image style={style.hadderlogo} source={require('../Asets/Images/mylogo.svg.png')} />

                </View>

                <View style={style.hadderpart2} >

                    <Text style={style.hadderpart2inner}>Karona</Text>

                </View>

                <View style={style.hadderpart3}>



                </View>

                <View style={style.hadderpart4}>



                </View>

                <View style={style.hadderpart5}>

                    <Text><Icon name="bell" size={25} color="#1d9cf1cd" onPress={() => props.navigation.navigate('Notification')} /></Text>

                </View>

                <View style={style.hadderpart5}>

                    <Text><Icon2 name="chatbox-outline" size={30} color="#1d9cf1cd" onPress={() => props.navigation.navigate('Chat')} /></Text>

                </View>


            </SafeAreaView>

            <View style={style.homemainbody}>

                <View style={style.story}>



                </View>

                <View style={style.followdiv}>

                    <Text style={{fontWeight:"bold"}} >Follwing</Text>

                    <Text style={{fontWeight:"bold"}}>Explore</Text>

                </View>



            </View>

            <View style={style.footer}>

                <View style={style.footerpart1}>

                    <Text><Icon3 name="home" size={30} color="#1d9cf1cd" onPress={() => props.navigation.navigate('Home')} /> </Text>

                </View>

                <View style={style.footerpart1}>

                    <Text><Icon1 style={{color:"rgba(0,0,0,0.400)"}} name="search1" size={30} color="#1d9cf1cd" onPress={() => props.navigation.navigate('Search')} /></Text>

                </View>

                <View style={style.footerpart1}>

                    <Text><Icon4 style={{color:"rgba(0,0,0,0.400)"}} name="plussquareo" size={30} color="#1d9cf1cd" onPress={() => setIsModelVisible(true)} /></Text>

                </View>

                <View style={style.footerpart1}>

                    <Text><Icon5 style={{color:"rgba(0,0,0,0.400)"}} name="play-video" size={35} color="#1d9cf1cd" /></Text>

                </View>

                <View style={style.footerpart1}>

                    <Text><Icon2 style={{color:"rgba(0,0,0,0.400)"}} name="person-outline" size={30} color="#1d9cf1cd" onPress={() => props.navigation.navigate('Profile')} /></Text>

                </View>

            </View>

            <Modal

                style={style.popuphome}

                visible={isModelVisible}

                onRequestClose={() => setIsModelVisible(false)}

                animationType="slide"

                transparent={true} 
            >

                <View style={style.modalContainer}>
                    
                    <Button style={style.popupbtns}><Text style={style.popupbtntext}>Story</Text></Button>

                    <Button style={style.popupbtns}><Text style={style.popupbtntext}>Post</Text></Button>

                    <Button style={style.popupbtns}><Text style={style.popupbtntext}>Reel</Text></Button>

                    <Button style={style.popupbtns}><Text style={style.popupbtntext}>Video</Text></Button>

                    <Button style={style.popupbtns}><Text style={style.popupbtntext}>Live</Text></Button>

                    <Button  style={style.popupbtns} onPress={() => setIsModelVisible(false)} ><Text style={style.popupbtntext}>close</Text> </Button>

                </View>

            </Modal>

        </View>

    )

}

const style = StyleSheet.create({

    homebody:
    {

        height: "100%",

        width: "100%",

        backgroundColor: "#fff",

    },

    homehadder:
    {

        height: "5%",

        width: "100%",

        flexDirection: "row",

        backgroundColor: "#fff",


    },

    hadderpart1:
    {

        height: "100%",

        width: "10%",

        justifyContent: "center",

        alignItems: "center"

    },

    hadderpart2:
    {

        justifyContent: 'center',

        alignItems: 'center'

    },

    hadderlogo:
    {

        height: 30,

        width: 30,

    },

    hadderpart2inner:
    {

        fontSize: 25,

        fontWeight:"bold"

    },

    hadderpart3:
    {

        width: "37%"

    },

    hadderpart4:
    {

        width: "12%",

        justifyContent: "center",

        alignItems: 'center'

    },

    hadderpart5:
    {

        width: "12%",

        justifyContent: "center",

        alignItems: 'center'

    },

    hadderpart6:
    {

        width: "12%",

        justifyContent: "center",

        alignItems: 'center'

    },
    homemainbody:
    {
        height: "89%",

        backgroundColor: "#fff",

    },

    footer:
    {

        height: "6%",

        width: "100%",

        flexDirection: "row",

        justifyContent: 'space-between',

        backgroundColor: "#fff",

        borderWidth:1,

        borderColor:"#1d9cf1cd"


    },

    footerpart1:
    {


        width: "15%",

        justifyContent: "center",

        alignItems: 'center'

    },

    story:
    {

        height: "10%",

    },

    followdiv:
    {

        height: "4%",

        flexDirection: "row",

        justifyContent: "space-around",

        alignItems: "center",



    },

    modalContainer: {

        backgroundColor: "#fff",

        position: "absolute",

        bottom: 0,

        width: "100%",

        height: "40%", 

        borderWidth:1
    },

    popupbtns:
    {

       borderColor:"black",

       borderRadius:10,

       height:"15%",

       justifyContent:"center",

       alignItems:"center"

    },

    popupbtntext:
    {

        fontSize:20

    }




})

export default Home



