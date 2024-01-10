import React from "react";
import {TouchableOpacity, StyleSheet, Image, View, Text} from "react-native";
import {COLORS, FONTS, SHADOWS, SIZES} from "../../constants";

export default function JobCard({item, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <TouchableOpacity style={styles.imgWrapper}>
                <Image
                    source={{uri: item?.employer_logo ? item.employer_logo : "https://avatars.mds.yandex.net/i?id=7e02defb348bc1b24d063cc78875bcb87b586fc0-10869844-images-thumbs&n=13"}}
                    style={styles.logoImage}/>
            </TouchableOpacity>

            <View style={styles.textWrapper}>
                <Text style={styles.jobName1}>{item?.job_title}</Text>
                <Text style={styles.jobType}>{item.job_employment_type}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        padding:SIZES.medium,
        borderRadius:SIZES.small,
        backgroundColor:COLORS.white,
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    },

    imgWrapper:{
        width:50,
        height:50,
        backgroundColor: COLORS.white,
        justifyContent:'center',
        alignItems:'center',

    },

    logoImage:{
        width:'70%',
        height:'70%',
        tintColor:'',
    },

    textWrapper:{
        flex:1,
        marginHorizontal: SIZES.medium,

    },

    jobName1:{
        fontSize:SIZES.medium,
        fontFamily: FONTS.medium,
        color:COLORS.primary,

    },

    jobType:{
        fontSize: SIZES.small,
        marginTop:SIZES.small/2,
        fontFamily:FONTS.regular,
        textTransform:'capitalize',
        color:COLORS.gray,
    }
})