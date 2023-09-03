import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CategoriesAllHistory } from '../constants/Categories'
import Category from '../components/Category'
import { Provider } from 'react-redux'
import storeState from '../redux/store'
import Kalender from '../components/Kalender'
import CardList from '../components/CardList'
import CardListKehadiran from '../components/CardListKehadiran'
// import { }

const HistoryScreens = () => {

  const data = [
    {nama: "shafwan", tanggal: "2 September 2023", category: "Hadir"},
    {nama: "ongko", tanggal: "6 September 2023", category: "Hadir"},
    {nama: "mingki", tanggal: "6 September 2023", category: "Hadir"},
    {nama: "ong", tanggal: "4 September 2023", category: "Hadir"},

    {nama: "ein", tanggal: "1 September 2023", category: "Sakit"},
    {nama: "ien", tanggal: "3 September 2023", category: "Sakit"},
    {nama: "risa", tanggal: "6 September 2023", category: "Sakit"},

    {nama: "ali", tanggal: "2 September 2023", category: "Izin"},
    {nama: "asril", tanggal: "5 September 2023", category: "Izin"},
    {nama: "cika", tanggal: "4 September 2023", category: "Izin"},
]
  
  return(
    <View className="flex-1 p-4">
      <StatusBar/>
      <SafeAreaView>
        <Provider store={storeState}>
          <Category data={CategoriesAllHistory} display="none"/>
          <View className="mt-3">
            <Kalender />
            <CardListKehadiran select="Hadir" data={data} />
          </View>
        </Provider>
      </SafeAreaView>
    </View>
  )
}

export default HistoryScreens