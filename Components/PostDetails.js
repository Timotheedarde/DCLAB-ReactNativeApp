import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
  

export default class Details extends React.Component{


    render(){
        const {navigation, route} = this.props
        const { idPost } = route.params;
        console.log(this.props.navigation)
        return (
            <View style={styles.main_container}>
                <Text>idPost: {JSON.stringify(idPost)}</Text>
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