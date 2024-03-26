import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

const Video = () => {
    return (

        <View style={style.video}>

            <View style={style.vs1}>



            </View>

            <View style={style.vs2}>

                <View style={style.vs2inner}>

                    <View style={style.vs2inner1}>



                    </View>

                </View>

            </View>

        </View>

    )
}

style = StyleSheet.create({

    video:
    {

        height: "100%",

        width: "100%",

        borderWidth: 1


    },

    vs1:
    {

        height: "26%",

        with: "100%",

        borderWidth: 1

    },

    vs2:
    {

        height: "10%",

        with: "100%",

        borderWidth: 1,

        justifyContent: "center",

        alignItems: "center"

    },

    vs2inner:
    {

        height: "80%",

        width: "95%",

        borderWidth: 1,

    },

    vs2inner1:
    {

        height: "100%",

        width: "20%",

        borderWidth: 1,

    }


})


export default Video
