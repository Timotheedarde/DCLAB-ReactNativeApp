import * as React from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, Button, ActivityIndicator } from 'react-native';
import { getPostslistFromApi } from '../API/apiCalls';
import PostItem from '../Components/PostItem';


export default class ListPosts extends React.Component{

    constructor(props) {
        super(props)
        this.state = { 
            posts: [], 
            isLoading: false
        }
    }

    _loadPosts() {
        this.setState({isLoading:true})
        getPostslistFromApi().then(data => {
            this.setState({ posts: data , isLoading:false})
        })
    }

    _displayDetailForPost = (idPost) => {
        const {navigation}=this.props
        //console.log("Display Post with id " + idPost)
        navigation.push('PostDetails', {idPost:idPost})
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    render(){
        return (
            <SafeAreaView style={styles.main_container}>
                <Button title='Actualités' onPress={() => this._loadPosts()}/>
                {this._displayLoading()}
                <FlatList
                    data={this.state.posts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <PostItem
                            post={item}
                            displayDetailForPost={this._displayDetailForPost}
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
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
  })