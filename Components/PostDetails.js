import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
  

export default class Details extends React.Component{


    render(){
        return (
            <View style={styles.main_container}>
                <Text>itemId: 28</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })