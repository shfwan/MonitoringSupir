import { View, Text } from "react-native"
import Color from "../constants/Color"
import { useEffect } from "react"

const Home = () => {
    
    // const apiData = () => {
    //     useEffect(() => {
    //         fetch("http://localhost:4000/api/supir")
    //         .then((response) => {
    //             return response.json()
    //         })
    //         .then((data) => {
    //             const item = data
    //             item.map((i) => {
    //                 console.log(i.name)
    //             })
    //         })
    //     })
    // }


    return(
        <View >
            <Text style={{color: Color.Merah}}>Ongko</Text>
        </View>
    )
}

export default Home