import React from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS, FONTS, SHADOWS, SIZES, tabs} from "../../constants";

export default function JobTabs({activeTab, setActiveTab}){
    return(
        <View>
            <Text style={styles.container}>
                <FlatList data={tabs} horizontal showsHorizontalScrollIndecator={false} contentContainerStyle={{columnGap:SIZES.small/2}} keyExtractor={(item)=>item} renderItem={({item}) =>(
                    <TouchableOpacity style={styles.tabBox(activeTab, item)} onPress={() =>setActiveTab(item)}>
                        <Text style={styles.tabText(activeTab, item)}>{item}</Text>
                    </TouchableOpacity>
                )}/>
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginTop: SIZES.medium,
        marginBottom: SIZES.small,

    },

    tabBox:(activeTab, item) => ({
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.xLarge,
        backgroundColor: item === activeTab ? COLORS.primary : "#F3F4F8",
        borderRadius: SIZES.medium,
        marginLeft:2,
        ...SHADOWS.medium,
        shadowColor:COLORS.white,
    }),

    tabText:(activeTab, item) =>({
        fontSize: SIZES.small,
        color: item === activeTab ? COLORS.gray2 : COLORS.primary,
        fontFamily: FONTS.medium,

    })
})