import * as React from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Components/Home';
import PostDetails from '../Components/PostDetails';
import EventDetails from '../Components/EventDetails';
import ForumDetails from '../Components/ForumDetails';


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
    return (
      <Home 
        navigation = {navigation}
      />
    )
  }

function PostDetailsScreen({route,navigation}) {
    return (
        <PostDetails
            navigation = {navigation}
            route = {route}
        />
    )
}

function EventDetailsScreen({route,navigation}) {
    return (
        <EventDetails
            navigation = {navigation}
            route = {route}
        />
    )
}

function ForumDetailsScreen({route,navigation}) {
    return (
        <ForumDetails
            navigation = {navigation}
            route = {route}
        />
    )
}

function ProfilScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profil screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home"
        component={HomeScreen} 
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#00263E',
          },
          headerTintColor: '#fff',
        }}
        />
      <HomeStack.Screen
       name="PostDetails" 
       component={PostDetailsScreen}
       options={{
        title: '',
        headerStyle: {
          backgroundColor: '#00263E',
        },
        headerTintColor: '#fff',
      }}

      />
      <HomeStack.Screen name="EventDetails" component={EventDetailsScreen} />
      <HomeStack.Screen name="ForumDetails" component={ForumDetailsScreen} />
    </HomeStack.Navigator>
  );
}

const ProfilStack = createStackNavigator();

function ProfilStackScreen() {
  return (
    <ProfilStack.Navigator>
      <ProfilStack.Screen name="Profil" component={ProfilScreen} />
      <ProfilStack.Screen name="Details" component={DetailsScreen} />
    </ProfilStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

    const styles = StyleSheet.create({
        tabBar_Icon: {
            width:40,
            height:40,
        }
      })

  return (
    <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                activeBackgroundColor: '#DDDDDD',
                inactiveBackgroundColor: '#FFFFFF',
        }}>
        <Tab.Screen 
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarIcon: () => {
                    return <Image style={ styles.tabBar_Icon }
                        source={require('../Images/home.png')}
                    />
                }
            }}
        />
        <Tab.Screen
            name="Profil" 
            component={ProfilStackScreen} 
            options={{
                tabBarIcon: () => {
                    return <Image style={ styles.tabBar_Icon }
                        source={require('../Images/user.png')}
                    />
                }
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



