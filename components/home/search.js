import React, {useState} from "react";
import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {COLORS, filterJobTypes, SIZES} from "../../constants";
import {FONTS} from "../../constants/theme";
import {useRouter} from "expo-router";

export default function Search() {

    const [activeJobType, setActiveJob] = useState("Full-time");

    const [term, setTerm]= useState("");

    const router = useRouter();

    const onPress = (item) => {
        setActiveJob(item);
        router.push(`/search/${item}`);

    }

    const onSearchPress = ()=>{
        if (term.trim().length === 0) return;
        router.push(`/search/${term}`);
    }

    return (
        <View>
            {/*Search input container*/}
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper} onPress={onSearchPress}>
                    <TextInput value={term} onChangeText={(text) => setTerm(text)} style={styles.inputSearch} placeholder={"Siz nima qidiryapsiz? "}/>
                </View>

                <TouchableOpacity style={styles.searchBtn} >
                    <Image style={styles.img} source={require("../../assets/icons/i-removebg-preview.png")}
                           resizeMode={"contain"}/>
                </TouchableOpacity>
            </View>
            {/*Filter container*/}
            <View style={styles.filterContainer}>
                <FlatList data={filterJobTypes} renderItem={({item}) => (
                    <TouchableOpacity style={styles.filter(activeJobType, item)} onPress={()=>onPress(item)}>
                        <Text style={styles.filterTitle(activeJobType, item)}>{item}</Text>
                    </TouchableOpacity>
                )}
                          keyExtractor={(item) => `filter-job-${item}`}
                    // columnGap: 10  bu contntlar urasidagi joy
                          contentContainerStyle={{columnGap: SIZES.xSmall}}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: SIZES.xLarge,
        height: 50,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",

    },
    inputSearch: {
        width: "100%",
        height: '100%',
        paddingHorizontal: SIZES.medium,
        fontFamily: FONTS.regular

    },

    searchBtn: {
        width: 50,
        height: '100%',
        backgroundColor: COLORS.tertiary,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        width: "75%",
        height: "75%",
        tintColor: COLORS.lightWhite,

    },

    filterContainer: {
        alignItems: 'center',
        marginTop: SIZES.large,
    },

    filter: (activeFilterJob, item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderWidth: 1,
        borderColor: activeFilterJob === item ? COLORS.secondary : COLORS.lightWhite,
        backgroundColor: activeFilterJob === item ? COLORS.secondary : COLORS.lightWhite,
    }),

    filterTitle: (activeFilterJob, item) => ({
        color: activeFilterJob === item ? COLORS.white : COLORS.gray,
        fontFamily: FONTS.bold
    })
})