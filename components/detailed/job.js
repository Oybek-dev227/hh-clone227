import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import {COLORS, FONTS, icons, SIZES} from "../../constants";

export default function Job({companyLogo, companyName, jobTitle, location}) {
    return (
        <View style={styles.container}>
            <View style={styles.imgBox}>
                <Image
                    source={{uri: companyLogo ? companyLogo : "https://avatars.mds.yandex.net/i?id=7e02defb348bc1b24d063cc78875bcb87b586fc0-10869844-images-thumbs&n=13"}}
                    style={styles.logoImage}/>
            </View>

            <View style={styles.jobTitleBox}>
                <Text style={styles.jobTitle1}>{jobTitle}</Text>
            </View>

            <View style={styles.companyInfoBox}>
                <Text style={styles.companyName1}>{companyName}</Text>
                <View style={styles.locationBox}>
                    <Image  style={styles.locationImage} source={icons.location} resizeMode={"contain"}/>
                    <Text style={styles.locationName}>{location}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgBox: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: SIZES.large,
    },

    logoImage: {
        width: '80%',
        height: '80%',
    },

    jobTitleBox:{
        marginTop:SIZES.small,
    },

    jobTitle1:{
        fontSize:SIZES.large,
        color:COLORS.primary,
        fontFamily:FONTS.bold,
        textAlign:'center',
    },

    companyInfoBox:{
        marginTop:SIZES.small /2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },

    companyName1:{
        fontSize: SIZES.medium - 2,
        color:COLORS.primary,
        fontFamily: FONTS.medium,
    },

    locationBox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },

    locationImage:{
        width:14,
        height:14,
        tintColor: COLORS.gray,
    },

    locationName:{
        fontSize:SIZES.medium-2,
        color:COLORS.gray,
        fontFamily:FONTS.regular,
        marginLeft:2,
    },
})