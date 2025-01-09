import { View, Image, StyleSheet,Text, Pressable } from 'react-native'
import '../global.css'
import * as WebBrowser from 'expo-web-browser';
import moment from "moment"
const Card = (props) => {

    const goToUrl = () => {
        WebBrowser.openBrowserAsync(props.url);
    }
    return (
        <Pressable onPress={goToUrl}>
            <View style={styles.entireCard}>
                <Image source={{ uri: props.urlToImage }} style={styles.image} />

                <View style={{ padding: 20 }}>
                    <Text style={styles.headerText} >{props.title}</Text>
                    <Text style={styles.description} numberOfLines={3}>{props.description}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5 }}>
                        <Text>by: <Text style={styles.headerText}>{props.author}</Text></Text>
                        <Text style={styles.date}>{moment(props.publishedAt).format("MMM Do YY")}</Text>
                    </View>
                    <Text>source: <Text style={styles.source}>{props.source}</Text></Text>

                </View>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    entireCard: {
        margin: 20,
        width: "90%",
        alignSelf:"center",
       borderRadius:40,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowOffset: { height: 5, width: 5 },
        elevation: 5,
        backgroundColor:"#fff"
    },
    image: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: "100%",
        height:200,
    },
    headerText: {
        fontSize: 18,
        marginTop:5,
        fontWeight:"bold",
        flexWrap:"wrap"
    },
    description: {
        fontSize: 15,
        marginTop:5
    },
    date: {
        fontSize: "15",
        fontWeight: "bold",
        color:" #4ade80"
    },
    source: {
        fontSize: 18,
        marginTop:10,
        fontWeight: "bold",
        color:" #4ade80"
    }

})
export default Card