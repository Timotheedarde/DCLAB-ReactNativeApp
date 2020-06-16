import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, Button } from 'react-native';
import { getPostslistFromApi } from '../API/apiCalls'

// Components/Search.js


export default class Home extends React.Component{

    constructor(props) {
        super(props)
        this.state = { posts: [] }
    }

    _loadPosts() {
        getPostslistFromApi().then(data => {
            console.log(data[0].title.rendered)
            this.setState({ posts: data[0]})
        })
    }

    render(){
        return (
            <SafeAreaView style={styles.main_container}>
                <Button title='Rechercher' onPress={() => this._loadPosts()}/>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Text>{ item.title.rendered }</Text>}
                />
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