import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ListPosts from '../Components/ListPosts'

export default class Home extends React.Component{
    render(){
        const {navigation}=this.props
        return (
            <View style={styles.main_container}>
                <Button title='test' onPress={()=>navigation.push('PostDetails')}/>
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
