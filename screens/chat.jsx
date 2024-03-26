import { StyleSheet, View } from "react-native";

import { Button, Text, TextInput } from "react-native-paper";

import Icon1 from 'react-native-vector-icons/AntDesign'

function Chat(props) {

    console.log(props);

    return (

        <View style={style.homebody}>

            <View style={style.headder}>

                <View style={style.chatbackbtn}>

                  <Icon1  onPress={()=>props.navigation.navigate('Home')} name="arrowleft" size={25} />

                </View>

              <View style={style.chatuserid}>

                 <Text style={{fontSize:20 , fontWeight:"bold"}}> @userid</Text>

              </View>

            </View>


            <View style={style.headdersearch}>

                <View style={style.sreachbar}>

                    <TextInput style={style.searchinout} placeholder="search"></TextInput>

                    <Icon1 name="search1" size={17} color="#1d9cf1cd" />

                </View>

            </View>

            <View style={style.homemainbody}>

                <View style={style.note}>



                </View>

                <View style={style.chatbtns}>

                    <Button style={style.chatbtninner}><Text style={{color:"#fff",fontWeight:"bold"}}>Messages</Text> </Button>
                    
                    <Button style={style.chatbtninner}><Text style={{color:"#fff" ,fontWeight:"bold"}}>Groups</Text> </Button>

                    <Button style={style.chatbtninner}><Text style={{color:"#fff" ,fontWeight:"bold"}}>Requst</Text> </Button>

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

    headder:

    {

        height:"5%",
        
        width:"100%",

        flexDirection:"row"

    },

    chatuserid:
    {

        height:"100%",
        
        width:"40%",

        justifyContent:"center"

    },

    chatbackbtn:
    {
       
       height:"100%",

       width:"10%",

       justifyContent:"center",

       alignItems:"flex-end"

    },
    homemainbody:
    {
        height:"80%",

        backgroundColor: "#fff",

    },

    

    headdersearch:
    {

        height: "6%",

        width: "100%",

        justifyContent: "center",

        alignItems: "center",

        flexDirection: "row"


    },
    sreachbar:
    {

        borderWidth: 1,

        width: "95%",

        height: "75%",

        borderRadius: 10,

        flexDirection: 'row',

        alignItems: "center",

    },

    searchinout:
    {

        width: "85%",

        backgroundColor: "#fff",

        height: "100%",

        marginLeft: "3%",


        borderWidth: 0,

        borderBottomColor: "#fff"


    },

    note:
    {

         height:"13%",

    },

    chatbtns:
    {

        height:"7%",

        flexDirection:"row",

        justifyContent:"center",

        alignItems:"center",

        justifyContent:"space-around"

    },

    chatbtninner:
    {

        backgroundColor:"#1d9cf1cd",

        width:"30%",

        borderRadius:10

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

export default Chat




















