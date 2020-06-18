import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ListPosts from '../Components/ListPosts'

export default class Home extends React.Component{
    render(){
        const {navigation}=this.props
        return (
            <View style={styles.main_container}>
                <ListPosts navigation={navigation}/>
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
