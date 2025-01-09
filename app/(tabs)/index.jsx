import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Platform, View, SafeAreaView,Text, FlatList } from 'react-native';
import Card from '../../components/Card'
import '../../global.css'
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [arrayNews, setArrayNews] = useState([]);
  const getData = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1600107e5f514cab9c41a4d314261ea6',
      {
        params: {
          category:"technology"
        }
      }
    )
      .then((response) => {
        let dataCollected = response.data.articles
        let filteredData = dataCollected.filter((item)=> item.source.name != "[Removed]")
        setArrayNews(filteredData)
      })
      .catch((error)=> {
        console.log(error);
      })
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <SafeAreaView className="flex-1">
      {/*Header */}
      <View style={{flexDirection:"row", margin:20}}>
        <Ionicons name='book' size={28} color="#4ade80" />
        <Text className='text-3xl color-green-400' style={{paddingLeft:10}}>Tech News</Text>
      </View>
      {/*Body */}
      <FlatList data={arrayNews} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
        <Card urlToImage={item.urlToImage} author={item.author} description={item.description} publishedAt={item.publishedAt} title={item.title} source={item.source.name} url={item.url} />
  )}/>

    </SafeAreaView>
  )
}
