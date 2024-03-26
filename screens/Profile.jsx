import { StyleSheet, View , TouchableOpacity,Modal } from "react-native";

import { useState,useEffect } from "react";

import { Button,  Text } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";

import { Image } from "react-native";

import Icon1 from 'react-native-vector-icons/AntDesign'

import Icon2 from 'react-native-vector-icons/Ionicons'

import Icon3 from 'react-native-vector-icons/Octicons'

import Icon4 from 'react-native-vector-icons/AntDesign'

import Icon5 from 'react-native-vector-icons/Foundation'

import Icon6 from 'react-native-vector-icons/Fontisto'

import AsyncStorage from "@react-native-async-storage/async-storage";

function Profile( props ) {

    console.log(props);

    const [isModelVisible, setIsModelVisible] = useState(false)

    const [isModelVisible1, setIsModelVisible1] = useState(false)

    

    const [username, setUsername] = useState('');

    useEffect(() => {

        const getUsername = async () => {

            try {

                const storedUsername = await AsyncStorage.getItem('username');

                setUsername(storedUsername || '');

            } catch (error) {

                console.error('Error:', error);

            }

        };

        getUsername();

    }, []);

    return (


        <View style={styles.homebody}>

            <SafeAreaView style={styles.homehadder}>

                <View style={styles.hadderpart2} >

                    <Text style={styles.hadderpart2inner}>{username}</Text>

                </View>

                <View style={styles.hadderpart3}>

                </View>

                <View style={styles.hadderpart4}>

                </View>

                <View style={styles.hadderpart5}>

                    <Text><Icon4 name="plussquareo" size={30} onPress={() => setIsModelVisible(true)} color="#1d9cf1cd" /></Text>

                </View>

                <Modal

                    style={styles.popuphome}

                    visible={isModelVisible}

                    onRequestClose={() => setIsModelVisible(false)}

                    animationType="slide"

                    transparent={true}
                >

                    <View style={styles.modalContainer}>

                        <Button style={styles.popupbtns}><Text style={styles.popupbtntext}>Story</Text></Button>

                        <Button style={styles.popupbtns}><Text style={styles.popupbtntext}>Post</Text></Button>

                        <Button style={styles.popupbtns}><Text style={styles.popupbtntext}>Reel</Text></Button>

                        <Button style={styles.popupbtns}><Text style={styles.popupbtntext}>Video</Text></Button>

                        <Button style={styles.popupbtns}><Text style={styles.popupbtntext}>Live</Text></Button>

                        <Button style={styles.popupbtns} onPress={() => setIsModelVisible(false)} ><Text style={styles.popupbtntext}>close</Text> </Button>

                    </View>

                </Modal>

                <View style={styles.hadderpart5}>

                    <TouchableOpacity onPress={() => setIsModelVisible1(true)}>

                    <Text><Icon6 name="more-v-a" size={25} color="#1d9cf1cd"  /></Text>

                    </TouchableOpacity>

                </View>

                <Modal

                    style={styles.popuphome1}

                    visible={isModelVisible1}

                    onRequestClose={() => setIsModelVisible1(false)}

                    animationType="slide"

                    transparent={true}
                >

                    <View style={styles.modalContainer1}>

                        <Button style={styles.popupbtns1} onPress={()=> props.navigation.navigate('Check')}><Text style={styles.popupbtntext1}>Settings</Text></Button>

                        <Button style={styles.popupbtns1} onPress={()=> props.navigation.navigate('Default')}><Text style={styles.popupbtntext1}>logout</Text></Button>

                        <Button style={styles.popupbtns1} onPress={() => setIsModelVisible1(false)} ><Text style={styles.popupbtntext1}>close</Text> </Button>

                    </View>

                </Modal>


            </SafeAreaView>

            <View style={styles.homemainbody}>

                <View style={styles.userinfo}>

                    <View style={styles.userdpdiv}>

                        <Image style={styles.userdp} source={require('../Asets/Images/dpp.png')} />

                    </View>

                    <View style={styles.userinfodiv}>

                        <View style={styles.infopart1}>

                            <Text style={{ fontSize: 20, fontWeight:"bold" }}>100</Text>

                            <Text>Post</Text>

                        </View>

                        <View style={styles.infopart1}>

                            <Text style={{ fontSize: 20, fontWeight:"bold" }}>10</Text>

                            <Text>Followers</Text>

                        </View>

                        <View style={styles.infopart1}>

                            <Text style={{ fontSize: 20, fontWeight:"bold" }}>145</Text>

                            <Text>Following</Text>

                        </View>


                    </View>

                </View>

                <View style={styles.bio}>

                    <View style={styles.bioinner}>

                        <Text style={{ fontSize: 20, fontWeight:"bold" }}>santhu royal</Text>

                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus in totam pariatur obcaecati tempora exercitationem, reprehenderit maxime illo commodi.</Text>

                    </View>

                </View>

                <View style={styles.btndiv}>

                    <Button    style={styles.btn}  ><Text style={styles.btntext}  onPress={() => props.navigation.navigate('Edit')}>Edit Profile</Text></Button>

                    <Button style={styles.btn}><Text style={styles.btntext}>Portfolio</Text></Button>

                </View>

                <View style={styles.highlets}>



                </View>

                <View style={styles.nav}>

                    <View style={styles.navdivs}>

                        <Text  style={{  fontWeight:"bold" }}>Post</Text>

                    </View>

                    <View style={styles.navdivs}>

                        <Text  style={{  fontWeight:"bold" }}>Reels</Text>

                    </View>

                    <View style={styles.navdivs}>

                        <Text  style={{  fontWeight:"bold" }}>videos</Text>

                    </View>

                    <View style={styles.navdivs}>

                        <Text  style={{  fontWeight:"bold" }}>live</Text>

                    </View>

                    <View style={styles.navdivs}>

                        <Text  style={{  fontWeight:"bold" }}>Playlist</Text>

                    </View>

                </View>

            </View>

            <View style={styles.footer}>

                <View style={styles.footerpart1}>

                    <Text><Icon3 style={{color:"rgba(0,0,0,0.400)"}} name="home" size={30} color="#1d9cf1cd" onPress={() => props.navigation.navigate('Home')} /></Text>

                </View>

                <View style={styles.footerpart1}>

                    <Text><Icon1  style={{color:"rgba(0,0,0,0.400)"}} name="search1" size={30} color="#1d9cf1cd" onPress={() => props.navigation.navigate('Search')} /></Text>

                </View>

                <View style={styles.footerpart1}>

                    <Text><Icon4 style={{color:"rgba(0,0,0,0.400)"}} name="plussquareo" size={30} color="#1d9cf1cd" onPress={() => setIsModelVisible(true)} /></Text>

                </View>

                <View style={styles.footerpart1}>

                    <Text><Icon5 style={{color:"rgba(0,0,0,0.400)"}} name="play-video" size={30} color="#1d9cf1cd" /></Text>

                </View>

                <View style={styles.footerpart1}>

                    <Text><Icon2 name="person-outline" size={30} color="#1d9cf1cd" onPress={() => props.navigation.navigate('Profile')} /></Text>

                </View>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({

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

        width: "15%",

        justifyContent: "center",

        alignItems: "center",
     

    },

    hadderpart2:
    {

        justifyContent: 'center',

        alignItems: 'center',


        width:"25%"

    },

    hadderlogo:
    {

        height: 30,

        width: 30,

    },

    hadderpart2inner:
    {

        fontSize: 20,

        fontWeight:"bold"

    },

    hadderpart3:
    {

        width: "40%"

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

        backgroundColor: "#fff"

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

    userinfo:
    {

        height: "15%",

        width: "100%",

        flexDirection: 'row'
    },

    userdp:
    {

        height: 100,

        width: 100,



    },

    userdpdiv:
    {

        height: "100%",

        width: "30%",

        justifyContent: 'center',

        alignItems: "center"

    },

    userinfodiv:
    {
        width: "70%",

        height: "100%",

        flexDirection: 'row'

    },

    infopart1:
    {

        width: "33%",

        height: "100%",

        justifyContent: "center",

        alignItems: "center"

    },

    bio:
    {

        height: "13%",

        width: "100%",

        justifyContent: "center",

        alignItems: "center"

    },

    bioinner:
    {

        height: "100%",

        width: "90%",

    },

    btndiv:
    {


        height: "6%",

        flexDirection: "row",

        justifyContent: "center",

        alignItems: "center",

        justifyContent: "space-evenly"


    },

    btn:
    {

        height: "80%",

        width: "40%",

        borderColor: "black",

        borderRadius: 5,

        backgroundColor: "#1d9cf1cd",

        paddingTop:"1%"


    },
    btntext:
    {

        color: "#fff"

    },

    highlets:
    {

        height: "15%",


    },

    nav:
    {

        height: "5%",

        borderBottomWidth: 1,

        borderColor: "#1d9cf1cd",

        flexDirection: 'row'

    },

    navdivs:

    {

        height: "100%",


        width: "20%",

        justifyContent: "center",

        alignItems: "center"

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

    },

    modalContainer1: {

        backgroundColor: "#fff",

        position: "absolute",

        top:5,

        right:5,

        width: "35%",

        height: "20%", 

        borderWidth:1,

        borderRadius:20,

        borderColor:"#1d9cf1cd"
    },

    popupbtns1:
    {

       borderColor:"black",

       borderRadius:10,

       height:"33%",

       justifyContent:"center",

       alignItems:"center"

    },

    popupbtntext1:
    {

        fontSize:20

    }






})

export default Profile



