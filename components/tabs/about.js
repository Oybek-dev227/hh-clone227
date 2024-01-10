import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {COLORS, FONTS, SIZES} from "../../constants";

export default function About({info}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>About this job:</Text>
            <View style={styles.contentBox}>
                <Text style={styles.contentInfo}>{info}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:SIZES.large,
        backgroundColor:COLORS.lightWhite,
        borderRadius:SIZES.medium,
        paddingHorizontal: SIZES.medium,
    },

    title:{
        fontSize:SIZES.large,
        colors: COLORS.primary,
        fontFamily: FONTS.bold,
    },

    contentBox:{
        marginTop:SIZES.medium,
    },
    contentInfo:{
        fontSize: SIZES.small,
        color:COLORS.secondary,
        fontFamily:FONTS.regular,
    }
})