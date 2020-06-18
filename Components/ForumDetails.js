import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import { getForumFromApiWithIdItem } from '../API/apiCalls'

  

export default class Details extends React.Component{


    constructor(props) {
        super(props)
        this.state = { forum: undefined, isLoading:true }
    }
    


    componentDidMount(){
        const { route } = this.props
        const { idForum } = route.params;
        getForumFromApiWithIdItem(idForum).then(data => {
            this.setState({forum: data, isLoading:false})
        })
    }

    _displayPostDetails(){
        if (this.state.forum != undefined) {
            return (
                <ScrollView style={styles.scrollview_container}>
                    <Text>{this.state.forum.title.rendered}</Text>
                    <Text>{this.state.forum.content.rendered}</Text>
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
})