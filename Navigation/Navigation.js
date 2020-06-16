// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Components/Home';
import Details from '../Components/Details';

export default class Navigation extends React.Component{


      render(){

        function HomeScreen({ navigation }) {
            return (
              <Home 
                navigation = {navigation}
              />
            )
          }
          
          function DetailsScreen({navigation, route}) {
            return (
                <Details
                  navigation = {navigation}
                  route = {route}
                />
            )
          }
    
          const Stack = createStackNavigator();

          return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
          )
      }

}


