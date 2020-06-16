import * as React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Button } from 'react-native';
import { getPostslistFromApi } from '../API/apiCalls';
import PostItem from '../Components/PostItem';


export default class Home extends React.Component{

    constructor(props) {
        super(props)
        this.state = { posts: [] }
    }

    _loadPosts() {
        getPostslistFromApi().then(data => {
            this.setState({ posts: data})
        })
    }

    render(){
        return (
            <SafeAreaView style={styles.main_container}>
                <Button title='Liste des articles' onPress={() => this._loadPosts()}/>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <PostItem
                            post={item}
                        />
                    )}
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