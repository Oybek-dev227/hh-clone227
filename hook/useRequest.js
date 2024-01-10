import {View} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";

export default function useRequest(endpoint, query){

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers:{
            'X-RapidAPI-Key': '229e87cad7mshb831fd5c0380fbdp1d8ec3jsn9da3d2f3ddd5',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query}
    }

    const fetchData = async () =>{
        setIsLoading(true)
        try {
            const {data: res} = await axios.request(options)
            setData(res.data)
        }catch (error){
            setError(error)
            console.log(error)
        }finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    const refetch = ()=>{
        setIsLoading(true);
        fetchData();
    }

    return{data, isLoading, error, refetch}
}