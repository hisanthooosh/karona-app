import { StyleSheet, View } from "react-native";

import { Text, TouchableOpacity, TextInput } from "react-native-paper";

import Icon1 from 'react-native-vector-icons/AntDesign';

import Icon2 from 'react-native-vector-icons/Ionicons'

import Icon3 from 'react-native-vector-icons/Feather'

import Icon4 from 'react-native-vector-icons/FontAwesome'

import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons'


import { ScrollView } from "react-native";

function Settingspage(props) {

    console.log(props);

    return (


        <View style={styles.editbody}>

            <View style={styles.edithadder}>

                <View style={styles.edithadderpart1}>

                    <Icon1 onPress={() => props.navigation.navigate('Profile')} name="arrowleft" size={25} />

                </View>

                <View style={styles.edithadderpart2}>

                    <Text style={styles.part2titledit}>Settings</Text>

                </View>


            </View>

            <View style={styles.settingspart2}>

                <View style={styles.settingssearchdiv}>

                    <TextInput style={styles.settingspart2inner} placeholder="Search">


                    </TextInput>


                </View>


            </View >

            <View style={styles.setpart3}>

                <Text style={styles.setpart3inner}>Your Accoount</Text>

            </View>

            <View style={styles.setpart4}>

                <View style={styles.part41}>

                    <Icon2 name="person-outline" size={30} color="#1d9cf1cd" />

                </View>

                <View style={styles.part42}>

                    <View style={styles.part421}>

                        <Text style={styles.part421t}>Account Center</Text>

                    </View>

                    <View style={styles.part422}>

                        <Text style={styles.part422t}>Password,secqurity,personal details,ads</Text>

                    </View>

                </View>

                <View style={styles.part43}>

                    <Icon1 name="right" size={30} />

                </View>

            </View>

            <View style={styles.setpart3}>

                <Text style={styles.setpart3inner}>How you user our app</Text>

            </View>

            <View style={styles.setpart5}>

                <View style={styles.part51}>

                    <View style={styles.part511}>

                        <Icon3 name="bookmark" size={30} color="#1d9cf1cd" />

                    </View>

                    <View style={styles.part512}>

                        <Text style={styles.part512t}>Saved</Text>

                    </View>

                    <View style={styles.part513}>

                        <Icon1 name="right" size={30} />

                    </View>

                </View>

                <View style={styles.part51}>

                    <View style={styles.part511}>

                        <Icon4 name="history" size={30} color="#1d9cf1cd" />

                    </View>

                    <View style={styles.part512}>

                        <Text style={styles.part512t}>Archive</Text>

                    </View>

                    <View style={styles.part513}>

                        <Icon1 name="right" size={30} />

                    </View>

                </View>

                <View style={styles.part51}>

                    <View style={styles.part511}>

                        <Icon3 name="activity" size={30} color="#1d9cf1cd" />

                    </View>

                    <View style={styles.part512}>

                        <Text style={styles.part512t}>Your activity</Text>

                    </View>

                    <View style={styles.part513}>

                        <Icon1 name="right" size={30} />

                    </View>

                </View>

                <View style={styles.part51}>

                    <View style={styles.part511}>

                        <Icon4 name="bell" size={30} color="#1d9cf1cd" />

                    </View>

                    <View style={styles.part512}>

                        <Text style={styles.part512t}>Notifications</Text>

                    </View>

                    <View style={styles.part513}>

                        <Icon1 name="right" size={30} />

                    </View>

                </View>

                <View style={styles.part51}>

                    <View style={styles.part511}>

                        <Icon5 name="clock-time-eight-outline" size={30} color="#1d9cf1cd" />

                    </View>

                    <View style={styles.part512}>

                        <Text style={styles.part512t}>Time spent</Text>

                    </View>

                    <View style={styles.part513}>

                        <Icon1 name="right" size={30} />

                    </View>

                </View>

            </View>

            <View style={styles.setpart3}>

                <Text style={styles.setpart3inner}>Who can see your contant</Text>

            </View>

            <View style={styles.setpart5}>

                <View style={styles.part51}>

                    <View style={styles.part511}>

                        <Icon3 name="lock" size={30} color="#1d9cf1cd" />

                    </View>

                    <View style={styles.part512}>

                        <Text style={styles.part512t}>Account privicy</Text>

                    </View>

                    <View style={styles.part513}>

                        <Icon1 name="right" size={30} />

                    </View>

                </View>

                <View style={styles.part51}>

                    <View style={styles.part511}>

                    <Icon5 name="account-star-outline" size={30} color="#1d9cf1cd" />

                    </View>

                    <View style={styles.part512}>

                        <Text style={styles.part512t}>close Friends</Text>

                    </View>

                    <View style={styles.part513}>

                        <Icon1 name="right" size={30} />

                    </View>

                </View>

                <View style={styles.part51}>

                    <View style={styles.part511}>

                    <Icon5 name="block-helper" size={30} color="#1d9cf1cd" />

                    </View>

                    <View style={styles.part512}>

                        <Text style={styles.part512t}>Blocked</Text>

                    </View>

                    <View style={styles.part513}>

                        <Icon1 name="right" size={30} />

                    </View>

                </View>

                <View style={styles.part51}>

                    <View style={styles.part511}>

                        <Icon4 name="bell" size={30} color="#1d9cf1cd" />

                    </View>

                    <View style={styles.part512}>

                        <Text style={styles.part512t}>Hide story and live</Text>

                    </View>

                    <View style={styles.part513}>

                        <Icon1 name="right" size={30} />

                    </View>

                </View>

                
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

        flexDirection: "row",

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

    settingspart2:
    {

        height: "6%",

        alignItems: "center"

    },

    settingspart2inner:
    {

        width: "90%",

        height: "100%",

        backgroundColor: "#fff",



        paddingTop: "2%"


    },
    settingssearchdiv:
    {

        height: "100%",

        width: "90%",

        borderWidth: 1,

        borderRadius: 20,

        alignItems: "center",

        borderColor: "#1d9cf1cd",

    },

    setpart3:
    {

        height: "5%",

        width: "100%",

        justifyContent: "center",


    },

    setpart3inner:

    {

        fontSize: 15,

        fontWeight: "bold",

        marginLeft: "3%"

    },

    setpart4:
    {

        height: "10%",

        flexDirection: "row"

    },
    part41:
    {

        height: "100%",

        width: "15%",

        justifyContent: "center",

        alignItems: "center"

    },

    part42:
    {

        height: "100%",

        width: "75%"

    },

    part43:
    {
        height: "100%",

        width: "10%",

        justifyContent: "center",

        alignItems: "center"

    },

    part421:
    {

        height: "50%",

        width: "100%"

    },

    part422:
    {


        height: "50%",

        width: "100%"

    },

    part421t:
    {

        fontSize: 20,

        fontWeight: "bold",

        marginTop: "2%"

    },

    part422t:
    {

        color: "#1d9cf1cd"

    },
    setpart5:
    {

        width: "100%",

        height: "40%",

    },

    part51:
    {

        height: "20%",

        width: "100%",

        flexDirection: "row"

    },

    part511:
    {

        height: "100%",

        width: "15%",

        justifyContent: "center",

        alignItems: "center"

    },

    part512:
    {

        height: "100%",

        width: "75%",

        justifyContent: "center",



    },

    part513:
    {

        height: "100%",

        width: "10%",

        justifyContent: "center",

        alignItems: "center"


    },

    part512t:
    {

        fontSize: 20,

        fontWeight: "bold",

        marginTop: "2%"

    },





})

export default Settingspage


























