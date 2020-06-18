import * as React from 'react';
import { View,SafeAreaView,  StyleSheet, FlatList, Button, ActivityIndicator, Image } from 'react-native';
import { getPostslistFromApi } from '../API/apiCalls';
import { getEventslistFromApi } from '../API/apiCalls';
import { getForumslistFromApi } from '../API/apiCalls';
import PostItem from '../Components/PostItem';
import EventItem from '../Components/EventItem';
import ForumItem from '../Components/ForumItem';


export default class ListPosts extends React.Component{

    constructor(props) {
        super(props)
        this.state = { 
            posts: [],
            events: [],
            forums: [], 
            isLoading: false,
            firstLoad: true
        }
    }

    _loadPosts() {
        this.setState({posts: [],events: [],forums: [],isLoading:true,firstLoad: false})
        getPostslistFromApi().then(data => {
            this.setState({ posts: data , isLoading:false})
        })
    }

    _loadEvents() {
        this.setState({posts: [],events: [],forums: [],isLoading:true,firstLoad: false})
        getEventslistFromApi().then(data => {
            this.setState({ events: data , isLoading:false})
        })
    }

    _loadForums() {
        this.setState({posts: [],events: [],forums: [],isLoading:true,firstLoad: false})
        getForumslistFromApi().then(data => {
            this.setState({ forums: data , isLoading:false})
        })
    }

    _displayDetailForPost = (idPost) => {
        const {navigation}=this.props
        //console.log("Display Post with id " + idPost)
        navigation.push('PostDetails', {idPost:idPost})
    }

    _displayDetailForEvent = (idEvent) => {
        const {navigation}=this.props
        //console.log("Display Post with id " + idPost)
        navigation.push('EventDetails', {idEvent:idEvent})
    }

    _displayDetailForForum = (idForum) => {
        const {navigation}=this.props
        //console.log("Display Post with id " + idPost)
        navigation.push('ForumDetails', {idForum:idForum})
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

    _displayFirstLoad() {
        if (this.state.firstLoad) {
            return (
                <View style={styles.logo_container}>
                    <Image source={require('../Images/dclab_logo.png')} />
                </View>
            )
        }
    }

    render(){
        return (
            <SafeAreaView style={styles.main_container}>
                <View style={styles.buttons_container}>
                    <View style={styles.buttons}><Button title='Actualités' onPress={() => this._loadPosts()}/></View>
                    <View style={styles.buttons}><Button title='Évènements' onPress={() => this._loadEvents()}/></View>
                    <View style={styles.buttons}><Button title='Forums' onPress={() => this._loadForums()}/></View>
                </View>
                <View style={styles.list_container}>
                    {this._displayFirstLoad()}
                    {this._displayLoading()}
                    {/* POST */}
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
                    {/* EVENTS */}
                    <FlatList
                        data={this.state.events}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <EventItem
                                event={item}
                                displayDetailForEvent={this._displayDetailForEvent}
                            />
                        )}
                    />
                    {/* FORUMS */}
                    <FlatList
                    data={this.state.forums}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ForumItem
                            forum={item}
                            displayDetailForForum={this._displayDetailForForum}
                        />
                    )}
                />
                </View>
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
    buttons_container: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        marginHorizontal: 5,
    },
    list_container: {
        flex: 5,
        flexDirection:'row',
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
    },
    logo_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
})