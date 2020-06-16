import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import ListPosts from '../Components/ListPosts'

export default class Home extends React.Component{
    render(){
        const { navigation } = this.props;
        return (
            <View style={styles.main_container}>
                <Text>Home Screen</Text>
                <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {
                    itemId: 86,
                    });
                }}
                />
                <ListPosts/>
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
