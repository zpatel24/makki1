import  React, {useState, useEffect, useRef} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Linking, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { WebView } from 'react-native-webview'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
const { height, width } = Dimensions.get('window');
//import compass from './compass'
//import { Map as Mapper} from './Map';
import { render } from 'react-dom';
import MapView from 'react-native-maps';
import openMap from 'react-native-open-maps';
import { createStackNavigator } from '@react-navigation/stack';



<script src="https://kit.fontawesome.com/a076d05399.js"></script>

function tomorrowScreen({ navigation }) {
  const [person, setPerson] = useState(null);
  const [date, setDate] = useState(null);
  useEffect(async () =>{
    const response = await fetch ("https://script.googleusercontent.com/macros/echo?user_content_key=TWuZLNcvd6qr710Un_7u_DyGvXyApa0T3VJqe1DbhEAulFdxwQzISN7yQRZ-e0en6gq872zbgk789t3bgZjMc0GQCegdc-4fm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGktHVXuA-iL5UIitRyLqR2ATYPkodvISZPjLO5148TxIPa4ASuRHszTrYLgAtrb9VnVCMzgzCmP&lib=MAZ0i1i3HNPmaQNbU5js4zf9jz5b0QBE4")

    const data = await response.json();
    const item = data.December22;
    const item1 = data.year_juma_news;
    
    setDate(item1);
    setPerson(item);
  }, []);
  return (
    <View style={styles.container}>
    
    <View >
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>{person && <Text style={{fontSize: 35}}>{person["Islamic Date"]},{date["Islamicyear"]}</Text>}</View>
      <Text>─────────────────────────────</Text>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center', margin: 30 }}>{person && <Text style={{fontSize: 20}}>{person["Fajr"]}AM&nbsp;&nbsp;&nbsp;{person["Fajr Iqamah"]}AM&nbsp;&nbsp;Fajrالفجر</Text>}</View>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center', margin: 30 }}>{person && <Text style={{fontSize: 20}}>{person["Zuhr"]}PM&nbsp;&nbsp;&nbsp;{person["Zuhr Iqamah"]}PM&nbsp;&nbsp;Zuhurالظهر</Text>}</View>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center', margin: 30 }}>{person && <Text style={{fontSize: 20}}>{person["Asr"]}PM&nbsp;&nbsp;&nbsp;{person["Asr Iqamah"]}PM&nbsp;&nbsp;Asrلعصر</Text>}</View>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center', margin: 30 }}>{person && <Text style={{fontSize: 20}}>{person["Maghrib"]}PM&nbsp;&nbsp;&nbsp;{person["Maghrib"]}PM&nbsp;&nbsp;Maghribالمغرب‎</Text>}</View>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center', margin: 30 }}>{person && <Text style={{fontSize: 20}}>{person["Ishaa"]}PM&nbsp;&nbsp;&nbsp;{person["Ishaa Iqamah"]}PM&nbsp;&nbsp;Ishaaالعشاء</Text>}</View>
      <Text>─────────────────────────────</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>{person && <Text style={{fontSize: 25}}>Al-Jumu'ah: {person["Zuhr Iqamah"]}PM</Text>}</View>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center', margin: 30 }}>{person && <Text style={{fontSize: 20}}>Sunrise:{person["Sunrise"]}AM&nbsp;&nbsp;&nbsp;Sunset:{person["Maghrib"]}AM</Text>}</View>
      
    </View>
  </View>
  );
}
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tomorrow" component={tomorrowScreen} />
      
    </Stack.Navigator>
  );
}

const styleBody = {fontWeight: 'bold', fontSize: 25, color: 'black', letterSpacing: 1};
function PrayerTimes({navigation}) {
  var dater = new Date().toLocaleDateString();
  const [person, setPerson] = useState(null);
  const [date, setDate] = useState(null);
  useEffect(async () =>{
    const response = await fetch ("https://script.googleusercontent.com/macros/echo?user_content_key=TWuZLNcvd6qr710Un_7u_DyGvXyApa0T3VJqe1DbhEAulFdxwQzISN7yQRZ-e0en6gq872zbgk789t3bgZjMc0GQCegdc-4fm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGktHVXuA-iL5UIitRyLqR2ATYPkodvISZPjLO5148TxIPa4ASuRHszTrYLgAtrb9VnVCMzgzCmP&lib=MAZ0i1i3HNPmaQNbU5js4zf9jz5b0QBE4")

    const data = await response.json();
    const item = data.December21;
    const item1 = data.year_juma_news;
    
    setDate(item1);
    setPerson(item);
  }, []);
  return (
    <View style={styles.container}>
    <View style ={styles.header}>
        <Text style ={styles.headerText}>Today</Text>
        <View style={{ position: 'absolute', right: 0 }}><Button color={'#FFFFFF'} onPress={() => navigation.navigate("Tomorrow")} title="Tomorrow" /></View>
        <View style={{ position: 'absolute', left: 0 }}><Button color={'#FFFFFF'} onPress={() => Linking.openURL("https://makkimasjid.com/wp-content/uploads/current.pdf")} title="Monthly" /></View>
    </View>
    <View >
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>{person && <Text style={{fontSize: 35}}>{person["Islamic Date"]},{date["Islamicyear"]}</Text>}</View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}><Text> {dater}</Text></View>
      <Text>─────────────────────────────</Text>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center', margin: 30 }}>{person && <Text style={{fontSize: 20}}>{person["Fajr"]}AM&nbsp;&nbsp;&nbsp;{person["Fajr Iqamah"]}AM&nbsp;&nbsp;Fajrالفجر</Text>}</View>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center', margin: 30 }}>{person && <Text style={{fontSize: 20}}>{person["Zuhr"]}PM&nbsp;&nbsp;&nbsp;{person["Zuhr Iqamah"]}PM&nbsp;&nbsp;Zuhurالظهر</Text>}</View>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center', margin: 30 }}>{person && <Text style={{fontSize: 20}}>{person["Asr"]}PM&nbsp;&nbsp;&nbsp;{person["Asr Iqamah"]}PM&nbsp;&nbsp;Asrلعصر</Text>}</View>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center', margin: 30 }}>{person && <Text style={{fontSize: 20}}>{person["Maghrib"]}PM&nbsp;&nbsp;&nbsp;{person["Maghrib"]}PM&nbsp;&nbsp;Maghribالمغرب‎</Text>}</View>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center', margin: 30 }}>{person && <Text style={{fontSize: 20}}>{person["Ishaa"]}PM&nbsp;&nbsp;&nbsp;{person["Ishaa Iqamah"]}PM&nbsp;&nbsp;Ishaaالعشاء</Text>}</View>
      <Text>─────────────────────────────</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>{person && <Text style={{fontSize: 25}}>Al-Jumu'ah: {person["Zuhr Iqamah"]}PM</Text>}</View>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center', margin: 30 }}>{person && <Text style={{fontSize: 20}}>Sunrise:{person["Sunrise"]}AM&nbsp;&nbsp;&nbsp;Sunset:{person["Maghrib"]}AM</Text>}</View>
      
    </View>
  </View>
  );
  
}
function haha(){
  return(
   <View><Text>Hi</Text></View>
  );
}
function NewsScreen() {
  return (
    <View style={styles.container}> 
    <View style ={styles.header}>
        <Text style ={styles.headerText}>News/Events</Text>
    </View>
    <WebView
        source={{
          uri: 'https://makkimasjid.com/news/'
        }}
        style={{ marginTop: 0 }}
      />
    </View>
  );
}


function MapScreen() {
  const url = Platform.select({
    ios: `maps:0,0?q=${"3418 W Ainslie St"}`,
    android: `geo:0,0?q=${"3418 W Ainslie St"}`,
  })
  const mapRef = useRef(null)
  const [text, setText] = useState('');

  const handleMapPress = () => {
    const region = {
      latitude: 41.97088587324846,
      longitude: -87.7143979153414,
      latitudeDelta: 0.04,
      longitudeDelta: 0.05
      };
    mapRef.current.animateToRegion(region);
  }
  
    return (
      <View style={styles.container}>
      <View style ={styles.header}>
        <Text style ={styles.headerText}>Map</Text>
       
        
    </View>
    <Button
        
    color={'#000000'}
    onPress={() => Linking.openURL(url)}
    title="📍View Directions" />
        <MapView ref={mapRef} onPress={handleMapPress} style={styles.mapStyle} >
        <MapView.Marker
            coordinate={{latitude: 41.97088587324846,
            longitude: -87.7143979153414}}
            title={"Masjid is Here"}
            description={"Makki Masjid"}
         /></MapView>
      </View>
    );
  
}

function ContactScreen() {
  return (
    
    <View style={styles.container}>
    <View style ={styles.header}>
        <Text style ={styles.headerText}>Contact Information</Text>
    </View>
    <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center' }}>
      <View style={[{ width: "20%", margin: 40, backgroundColor: "green", flexDirection: 'row' }]}>
        <Button
        title="   Call"
        color="white"
        fontSize="30"
        onPress={() => {Linking.openURL('tel:8777111223');}}
      />
      </View>
        <Text style={{fontSize: 20}}>        +1(773) 588-8865</Text>
      </View>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center' }}>
      <View style={[{ width: "20%", margin: 40, backgroundColor: "green", flexDirection: 'row' }]}>
        <Button
        title="  Email"
        color="white"
        fontSize="30"
        onPress={() => Linking.openURL('mailto:info@makkimasjid.com?subject=sendmail&body=details')}
      />
      </View>
      <Text style={{fontSize: 20}}>     info@makkimasjid.com</Text></View>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center' }}>
      <View style={[{ width: "20%", margin: 40, backgroundColor: "green", flexDirection: 'row' }]}>
        <Button
        title="Address"
        color="white"
        fontSize="30"
        
      />
      </View>
      <Text style={{fontSize: 20, textAlign: 'center',flex:1, flexWrap: 'wrap'}}>  3418 W Ainslie St. Chicago IL 60625 USA</Text><Text>   </Text></View>
      <View style={{ flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center' }}>
      <View style={[{ width: "20%", margin: 40, backgroundColor: "green", flexDirection: 'row' }]}>
        <Button
        title="Website"
        color="white"
        fontSize="30"
        onPress={() => Linking.openURL('https://makkimasjid.com')
      }
      />
      </View>
      <Text style={{fontSize: 20, textAlign: 'center',flex:1, flexWrap: 'wrap'}}>  www.MakkiMasjid.com</Text></View>
      
      <View style={{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center' }}>
      <View style={[{ width: "50%", margin: 60, backgroundColor: "green", flexDirection: 'row' }]}>
        <Button
        title="Provide Feedback"
        color="white"
        fontSize="30"
        onPress={() => Linking.openURL('https://makkimasjid.com')
      }
      />
      </View>
      </View>
  </View>
  
  
  );
}
const OurStoryHTML = require ('./compass.html');
function CompassScreen() {
  
  return (
    /*<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>*/
      //compass()
      <View style={styles.container}>  
      <View style ={styles.header}>
        <Text style ={styles.headerText}>Compass</Text>
    </View>
      <WebView
        originWhitelist={['*']}
        source={OurStoryHTML}
        style={{ marginTop: 20 }}
      />

      
       

    </View>
  )
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    width: '100%',
    height:'14%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  
  headerText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
    letterSpacing: 1,
},
bodyText: {
  fontWeight: 'bold',
  fontSize: 25,
  color: 'black',
  letterSpacing: 1,
},
image: {
  width: '90%',
  flex: 1,
  alignSelf: 'center',
},
mapStyle: {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
},
  body: {
    width: '100%',
    height: '40',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  }
});

const Tab = createBottomTabNavigator();

 

  function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#228B22',
      }}
    >
      <Tab.Screen
        name="PrayerTimes"
        component={PrayerTimes}
        options={{
          tabBarLabel: 'Prayer Times',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="clockcircle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" color={color} size={size} />          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="map" color={color} size={size} />          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="contacts" color={color} size={size} />          ),
        }}
      />
      <Tab.Screen
        name="Compass"
        component={CompassScreen}
        options={{
          tabBarLabel: 'Compass',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="compass" color={color} size={size} />          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Tabs"  screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen name="Tomorrow" component={MyStack} />
    <Stack.Screen name="Tabs" component={MyTabs} />
  </Stack.Navigator>
    </NavigationContainer>
  );
}