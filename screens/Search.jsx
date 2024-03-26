import { StyleSheet, View ,Modal} from "react-native";

import { useState } from "react";

import { Text , TextInput , Button} from "react-native-paper";

import Icon1 from 'react-native-vector-icons/AntDesign'

import Icon2 from 'react-native-vector-icons/Ionicons'

import Icon3 from 'react-native-vector-icons/Octicons'

import Icon4 from 'react-native-vector-icons/AntDesign'

import Icon5 from 'react-native-vector-icons/Foundation'

import Icon6 from "react-native-vector-icons/Feather"

function Search(props) {

    const [isModelVisible, setIsModelVisible] = useState(false)

    console.log(props);

    return (

        <View style={style.homebody}>

            

            <View style={style.headdersearch}>

                <View style={style.sreachbar}>
  
                     <TextInput style={style.searchinout}></TextInput>

                     <Icon1 name="search1"  size={17} color="#1d9cf1cd"/>
  
                </View> 

                <View style={style.mic}>
  
                     <Icon6 name="mic"  size={17} color="#1d9cf1cd"/>

                     </View> 

                </View>

                 <View style={style.homemainbody}>



                   </View>

                <View style={style.footer}>

                 <View style={style.footerpart1}>

                    <Text><Icon3 style={{color:"rgba(0,0,0,0.400)"}} name="home" size={30} color="#1d9cf1cd" onPress={()=>props.navigation.navigate('Home')} /></Text>

                </View>

                <View style={style.footerpart1}>

                    <Text><Icon1 name="search1" size={30} color="#1d9cf1cd" /></Text>

                </View>

                <View style={style.footerpart1}>

                    <Text><Icon4 style={{color:"rgba(0,0,0,0.400)"}} name="plussquareo" size={30} color="#1d9cf1cd" onPress={()=>setIsModelVisible(true)} /></Text>

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

                        <Button style={style.popupbtns} onPress={() => setIsModelVisible(false)} ><Text style={style.popupbtntext}>close</Text> </Button>

                    </View>

                </Modal>

                <View style={style.footerpart1}>

                    <Text><Icon5 style={{color:"rgba(0,0,0,0.400)"}} name="play-video" size={35} color="#1d9cf1cd" /></Text>

                </View>

                <View style={style.footerpart1}>

                    <Text><Icon2 style={{color:"rgba(0,0,0,0.400)" }}  name="person-outline" size={30} color="#1d9cf1cd"  onPress={()=>props.navigation.navigate('Profile')} /></Text>

                </View>

            </View>

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

        fontSize: 20,

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
        height: "88.5%",

        backgroundColor: "#fff",

    },

    footer:
    {

        height: "6%",

        width: "100%",

        flexDirection: "row",

        justifyContent: 'space-between',

        backgroundColor: "#fff",

        borderColor:"#1d9cf1cd",

        borderWidth:1


    },

    footerpart1:
    {


        width: "15%",

        justifyContent: "center",

        alignItems: 'center'

    },

    headdersearch:
    {

          height:"6%",

          width:"100%",

          justifyContent:"center",

          alignItems:"center",

          flexDirection:"row"
          

    },
    sreachbar:
    {

         borderWidth:1,

         width:"85%",

         height:"75%",

         borderRadius:15,

         flexDirection:'row',

         alignItems:"center"

    },

    mic:
    {

          height:"100%",

          width:"10%",

          justifyContent:"center",

          alignItems:"center"

    },

    searchinout:
    {

        width:"85%",

        backgroundColor:"#fff",

        height:"100%",

        marginLeft:"3%",

        
         borderWidth:0,

         borderBottomColor:"#fff"
        

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

export default Search




















