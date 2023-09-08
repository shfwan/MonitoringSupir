import axios from 'axios'
import {useEffect, useState} from 'react'

export const Api = () => {
    const [supir,setSupir] = useState([])  
    const [user,setUser] = useState([])  
    const [kendaraan,setKendaraan] = useState([])  
    
    useEffect(() => {
        axios.get('https://monitoring-api-vert.vercel.app/api/v1/supir')
        .then((response) => setSupir(response.data)).catch((err) => console.log(err))
    },[])
    
    useEffect(() => {
        axios.get('https://monitoring-api-vert.vercel.app/api/v1/supir')
        .then((response) => setUser(response.data)).catch((err) => console.log(err))
    },[])
    
    useEffect(() => {
        axios.get('https://monitoring-api-vert.vercel.app/api/v1/supir')
        .then((response) => setKendaraan(response.data)).catch((err) => console.log(err))
    },[])
    
    // return {cater: supir}
}




