import React, {useState} from "react";
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from "react-native";
import useRequest from "../../hook/useRequest";
import {COLORS, FONTS, SIZES} from "../../constants";
import MyJobCard from "../cards/my-job-card";

export default function MyJobs() {
    const [selectedJob, setSelectedJob] = useState(null)
    const {data, isLoading , error} = useRequest("search", {
        query: 'React native',
        page: '1',
    })


    return (
        <View style={styles.container}>

            <Text style={styles.title}>Jobs for you</Text>

            <View style={styles.jobsContainer}>
                {isLoading ? (
                    <ActivityIndicator size={"large"} color={COLORS.primary}/> //bu telefonni uzini yaniy ios yoki android loading
                ) : error ? <Text>Something went wrong :(</Text>:  (<FlatList data={data} renderItem={({item}) => (<MyJobCard item={item} selectedJob={selectedJob} setSelectedJob={setSelectedJob}/>)}
                               keyExtractor={(item) => `job-${item.job_id}`}
                               contentContainerStyle={{columnGap: SIZES.medium}} scrollEnabled={false}
                               nestedScrollEnabled={true}
                />)}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.xLarge,
    },

    title: {
        fontSize: SIZES.xLarge,
        fontFamily: FONTS.medium,
        color: COLORS.primary,
    },

    jobsContainer: {
        marginTop: SIZES.medium,
    }
})