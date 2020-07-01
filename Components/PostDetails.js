import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import { getPostFromApiWithIdItem } from '../API/apiCalls'

  

export default class PostDetails extends React.Component{


    constructor(props) {
        super(props)
        this.state = { post: undefined, isLoading:true }
    }

    componentDidMount(){
        const { route } = this.props
        const { idPost } = route.params;
        getPostFromApiWithIdItem(idPost).then(data => {
            this.setState({post: data, isLoading:false})
        })
    }

    _displayPostDetails(){
        if (this.state.post != undefined) {
            return (
                <ScrollView style={styles.scrollview_container}>
                    <Image
                        style={styles.imagePostDetails}
                        source={{uri: 'http://192.168.1.12/WPDCLAB/wp-content/uploads/2020/05/devweb1-300x189.png'}}
                    />
                    <View style={styles.post_container} >
                        <Text style={styles.title_text}>{this.state.post.title.rendered}</Text>
                        <Text style={styles.content_text}>{this.state.post.content.rendered}</Text>
                    </View>
                </ScrollView>
            )
        }
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' color="#00263E" />
                </View>
            )
        }
    }

    render() {
       return (
        <View style={styles.main_container}>
            {this._displayLoading()}
            {this._displayPostDetails()}
        </View>
       )
    }
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor:'#00A3AD',
        flex: 1
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
    scrollview_container: {
        flex: 1,
    },
    post_container:{
        backgroundColor:'#FFF',
        margin:10,
        padding:5,
    },
    imagePostDetails: {
        height: 170,
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 35,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#00263E',
        textAlign: 'center'
    },
    content_text: {
        fontStyle: 'italic',
        color: '#00263E',
        margin: 5,
        marginBottom: 15
    },

})



