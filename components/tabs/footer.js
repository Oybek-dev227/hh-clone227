import React from "react";
import {View, StyleSheet, TouchableOpacity, Image, Text, Linking} from "react-native";
import {COLORS, FONTS, icons, SIZES} from "../../constants";
import * as url from "url";

export default function Footer({url}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.heartBtn}>
                <Image source={icons.heart} resizeMode={"contain"} style={styles.heartBtnIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.applyBtn} onPress={() => Linking.openURL(url)}>
                <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        padding: SIZES.small,
        backgroundColor:COLORS.lightWhite,
        justifyContent:'space-between',
        alignContent:'center',
        flexDirection:'row',

    },
    heartBtn:{
        width:55,
        height:55,
        borderWidth:1,
        borderColor: COLORS.primary,
        borderRadius:SIZES.medium,
        justifyContent:'center',
        alignItems:'center',
    },

    heartBtnIcon:{
        width: '40%',
        height:'40%',
        tintColor:COLORS.primary,
    },

    applyBtn:{
        flex:1,
        backgroundColor:COLORS.primary,
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:SIZES.medium,
        borderRadius:SIZES.medium,
    },

    applyText:{
        color:COLORS.lightWhite,
        fontFamily:FONTS.bold,
        fontSize:SIZES.medium,
    },

})