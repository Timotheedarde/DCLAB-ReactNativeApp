import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { getPostFromApiWithIdItem } from '../API/apiCalls'

  

export default class Details extends React.Component{


    render(){
    const { navigation, route } = this.props;
    const { itemId } = route.params;
        return (
            <View style={styles.main_container}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('Details', {
                    itemId: getPostFromApiWithIdItem(),
                    })
                }
                />
                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                <Button title="Go back" onPress={() => navigation.goBack()} />
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
