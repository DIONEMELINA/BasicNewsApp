import { Ionicons } from '@expo/vector-icons'
import { TextInput, View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import axios from 'axios'
import Card from '../../components/Card'
import { useState } from 'react'
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [arrayNews, setArrayNews] = useState([])
  const getArticle = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1600107e5f514cab9c41a4d314261ea6',
      {
        params: {
          category: "technology",
          q:searchValue
        }
      }
    )
      .then((response) => {
        let dataCollected = response.data.articles
        let filteredData = dataCollected.filter((item) => item.source.name != "[Removed]")
        setArrayNews(filteredData)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <SafeAreaView>
      <View style={styles.search}>
        <TextInput placeholder='Search' onChangeText={setSearchValue} onSubmitEditing={getArticle} style={styles.input} value={searchValue}/>
      </View>
      
      <FlatList data={arrayNews} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
        <Card urlToImage={item.urlToImage} author={item.author} description={item.description} publishedAt={item.publishedAt} title={item.title} source={item.source.name} url={item.url}/>
      )}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  search: {
    width: "90%",
    margin:10
  },
  input: {
    borderRadius: 10,
    padding:10,
    borderWidth: 1,
  }
})
export default Search

