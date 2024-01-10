// [] quganimiz sababi biz buyerga dinamik malumot qushamz
import React, {useCallback, useState} from "react";
import {ScrollView, ActivityIndicator, Text, View, SafeAreaView, RefreshControl} from "react-native";
import {COLORS, SIZES, icons, tabs} from "../../constants";
import {Stack, useGlobalSearchParams, useRouter} from "expo-router";
import {About, Footer, HeaderBtn, Job, JobTabs, Qualification, Responsibilities} from "../../components";
import useRequest from "../../hook/useRequest";

export default function Details() {
    const params = useGlobalSearchParams()
    const router = useRouter()

    const [activeTabs, setActiveTabs] = useState(tabs[0]);
    // id yozishimizdan maqsaq classni nomida [id] yozganimiz uchun
    // console.log(params.id)

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() =>{
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    },[])


    const {data, isLoading, refetch, error} = useRequest("job-details", {job_id: params.id})

    const renderTabContent = () =>{
        switch (activeTabs){
            case "About":
                return <About info={data[0].job_description ?? "No data provided"}/>;
            case "Qualifications":
                return <Qualification info={data[0].job_highlights?.Qualifications ?? ["N/A"]}/>;
            case "Responsibilities":
                return <Responsibilities info={data[0].job_highlights?.Responsibilities ?? ["N/A"]}/>;
            default:
                return null;
        }
    };



    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen options={{
                headerShadowVisible: false,
                headerTitle: "",
                headerStyle: {
                    backgroundColor: COLORS.lightWhite,
                },
                headerLeft: () => <HeaderBtn icon={icons.left} dimensions={"60%"} onPress={() => router.back()}/>,
                headerRight: () => <HeaderBtn icon={icons.share} dimensions={"60%"}/>

            }}/>
            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                    {isLoading ? (
                        <ActivityIndicator size={"large"} color={COLORS.primary}/> //bu telefonni uzini yaniy ios yoki android loading
                    ):error ?(
                        <Text>Something went wrong:(</Text>
                    ):(
                        data.length === 0 ? (
                            <Text>No data available:(</Text>
                        ):(
                            <View style={{padding:SIZES.medium, paddingBottom:SIZES.large}}>
                                <Job companyLogo={data[0].employer_logo} jobTitle={data[0].job_title} companyName={data[0].employer_name} location={data[0].job_country}/>
                                <JobTabs activeTab={activeTabs} setActiveTab={setActiveTabs}/>
                                <View style={{marginBottom:30}}>{renderTabContent()}</View>
                                {/*Job Tabs*/}
                            </View>
                        )
                    )}
                </ScrollView>

                <Footer url={data[0]?.job_google_link ?? "https://careers.google.com/jobs/results/"}/>
            </>
        </SafeAreaView>
    )
}