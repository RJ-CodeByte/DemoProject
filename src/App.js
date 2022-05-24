import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from './screens/splash';
import HomeScreen from './screens/home';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import EditUser from './screens/Edit';
import AddScreen from './screens/Add';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen
            name="Splash"
            options={{
              headerShown: false
            }}
            component={SplashScreen}
          />
          <Stack.Screen
            options={
              {
                // headerShown:false ,
                headerBackVisible: false,
              }
            }
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={
              {
                headerShown: true,
                headerBackVisible: true,
              }
            }
            name="Add"
            component={AddScreen}
          />
          <Stack.Screen
            options={
              {
                // headerShown: true,
                headerBackVisible: true,
              }
            }
            name="Edit"
            component={EditUser}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;


// import { Text, StyleSheet, View, SafeAreaView, SectionList, StatusBar, FlatList } from 'react-native'
// import React, { Component } from 'react'


// const DATA = [
//   {
//     title: "Main Dishes",
//     data: ["Pizza", "Burger", "Risotto"]
//   },
//   {
//     title: "Sides",
//     data: ["French Fries", "Onion Rings", "Fried Shrimps"]
//   },
//   {
//     title: "Drinks",
//     data: ["Water", "Coke", "Beer"]
//   },
//   {
//     title: "Desserts",
//     data: ["Cheese Cake", "Ice Cream"]
//   },
// ]



// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// )

// export default class App extends Component {
//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <SectionList
//           showsVerticalScrollIndicator={false}
//           sections={DATA}
//           keyExtractor={(item, index) => item + index}
//           renderItem={({ item }) => { return null; <Item title={item} /> }}
//           renderSectionHeader={({ section }) => (
//             <>
//               <Text style={styles.header}>{section.title}</Text>
//               <FlatList
//                 data={section.data}
//                 horizontal
//                 renderItem={({ item }) => <Item title={item} />}
//               />
//             </>
//           )}

//         />
//       </SafeAreaView>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingTop: StatusBar.currentHeight,
//     marginHorizontal: 20
//   },
//   item: {
//     backgroundColor: "#f9c2ff",
//     padding: 20,
//     marginVertical: 8,
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: "#fff"
//   },
//   title: {
//     fontSize: 24
//   }
// })


// // import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
// // import React, { Component } from 'react'

// // export default class App extends Component {
// //   state = {
// //     count: 0,
// //   }

// //   onPress = () => {
// //     this.setState({ count: this.state.count + 1 });
// //   }

// //   onReset = () => {
// //     this.setState({ count: 0 })
// //   }

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <TouchableOpacity style={styles.button} onPress={this.onPress}>
// //           <Text>Clike Me</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.button} onPress={this.onReset}>
// //           <Text>Reset</Text>
// //         </TouchableOpacity>
// //         <View>
// //           <Text>
// //             You Clicked {this.state.count} times
// //           </Text>
// //         </View>
// //       </View>
// //     )
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center'
// //   },
// //   button: {
// //     alignItems: 'center',
// //     backgroundColor: '#DDDDDD',
// //     padding: 10,
// //     marginBottom: 10
// //   }
// // })


// // import React from 'react';
// // import { Text, View, StyleSheet } from "react-native";


// // const styles = StyleSheet.create({
// //   center: {
// //     alignItems: 'center'
// //   }
// // })

// // const Greetings = (props) => {
// //   return (
// //     <View style={styles.center}>
// //       <Text>Hello {props.name}</Text>
// //     </View>
// //   )
// // }


// // const LotsOfGretings = () => {
// //   return (
// //     <View style={[styles.center, { top: 50 }]}>
// //       <Greetings name="XYZ" />
// //       <Greetings name="Jaina" />
// //       <Greetings name="Valeera" />

// //     </View>
// //   )
// // }

// // export default LotsOfGretings

// // import { Text, StyleSheet, View, Image, TextInput, ScrollView } from 'react-native'
// // import React, { Component } from 'react'


// // export default class App extends Component {
// //   render() {
// //     return (
// //       <View style={styles.body}>
// //         {/* <Text>Some Text</Text> */}
// //         <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center' }}>
// //           <Text style={{ margin: 20, fontSize: 20 }}>Avangers</Text>
// //           <Image
// //             source={{
// //               uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/dd4bz30-1d55fffc-6517-422f-9609-680cc512ef12.png/v1/fill/w_1280,h_1385,strp/avengers__endgame__2019__avengers_logo_png__by_mintmovi3_dd4bz30-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM4NSIsInBhdGgiOiJcL2ZcLzg0NmE5MDg2LThhNDAtNDNlMC1hYTEwLTJmYzdkNmQ3MzczMFwvZGQ0YnozMC0xZDU1ZmZmYy02NTE3LTQyMmYtOTYwOS02ODBjYzUxMmVmMTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HSwQpmD6VQVxpTovHw2AfJBINQC5dmlYqKxjvTGP_Fo'
// //             }}
// //             style={{ height: 250, width: 200 }}
// //           />
// //         </View>
// //       </View>
// //     )
// //   }
// // }

// // const styles = StyleSheet.create({
// //   body: {
// //     flex: 1,
// //     justifyContent: 'center'
// //   },
// // })
