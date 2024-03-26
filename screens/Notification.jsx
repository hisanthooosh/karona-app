import { StyleSheet, View } from "react-native";

import { Text } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";

import { Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome6";

import Icon1 from 'react-native-vector-icons/AntDesign'

import Icon2 from 'react-native-vector-icons/Ionicons'

import Icon3 from 'react-native-vector-icons/Octicons'

import Icon4 from 'react-native-vector-icons/AntDesign'

import Icon5 from 'react-native-vector-icons/Foundation'

function Notification(props) {

    console.log(props);

    return (


        <View style={style.homebody}>

            

            <SafeAreaView style={style.homehadder}>


               

                

                

                <Text style={style.hadderpart2inner}>Notifications</Text>

                

                

                


            </SafeAreaView>

            <View style={style.homemainbody}>



            </View>

            <View style={style.footer}>

                <View style={style.footerpart1}>

                    <Text><Icon3 name="home" size={25} color="#1d9cf1cd"  onPress={()=>props.navigation.navigate('Home')}/></Text>

                </View>

                <View style={style.footerpart1}>

                    <Text><Icon1 name="search1" size={25} color="#1d9cf1cd" onPress={()=>props.navigation.navigate('Search')} /></Text>

                </View>

                <View style={style.footerpart1}>

                    <Text><Icon4 name="plussquareo" size={25} color="#1d9cf1cd" /></Text>

                </View>

                <View style={style.footerpart1}>

                    <Text><Icon5 name="play-video" size={30} color="#1d9cf1cd" /></Text>

                </View>

                <View style={style.footerpart1}>

                    <Text><Icon2 name="person-outline" size={25} color="#1d9cf1cd" onPress={()=>props.navigation.navigate('Profile')} /></Text>

                </View>

            </View>

        </View>

    )

}

style = StyleSheet.create({

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

        justifyContent:"center",

        alignItems:"center",

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

        backgroundColor: "#fff",

    },

    footer:
    {

        height: "6%",

        width: "100%",

        flexDirection: "row",

        justifyContent: 'space-between',

        backgroundColor: "#fff",


    },

    footerpart1:
    {


        width: "15%",

        justifyContent: "center",

        alignItems: 'center'

    }




})

export default Notification 



