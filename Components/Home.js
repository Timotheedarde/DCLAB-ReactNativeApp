import * as React from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import ListView from '../Components/ListView'


export default class Home extends React.Component{

    render(){
        const {navigation}=this.props
        return (
            <SafeAreaView style={styles.main_container}>
                <ListView navigation={navigation}/>
            </SafeAreaView>
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
