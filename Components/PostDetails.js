import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import { getPostFromApiWithIdItem } from '../API/apiCalls'

  

export default class Details extends React.Component{


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
                        source={{
                        uri: 'http://192.168.1.12/WPDCLAB/wp-content/uploads/2020/05/devweb1-300x189.png',
                        }}
                    />
                    <Image
                        style={styles.imagePostDetails}
                        source={{
                        uri: 'http://192.168.1.12/WPDCLAB/wp-content/uploads/2020/05/devweb1-300x189.png',
                        }}
                    />
                    <Text>{this.state.post.title.rendered}</Text>
                    <Text>{this.state.post.content.rendered}</Text>
                </ScrollView>
            )
        }
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
      flex: 1
    },
    imagePostDetails: {
        width: 50,
        height: 50,
      }
})