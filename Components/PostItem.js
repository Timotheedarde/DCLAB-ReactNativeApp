
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image  } from 'react-native'

export default class PostItem extends React.Component {



    render() {
        const { post, displayDetailForPost, navigation } = this.props
        return (
            <TouchableOpacity
                style={styles.main_container}
                onPress={() => { displayDetailForPost(post.id) }}>
                <Image style={ styles.post_img } source={require('../Images/picsum.png')}/>
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{post.title.rendered}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{post.excerpt.rendered}</Text>
                    </View>
                </View>
            </TouchableOpacity >
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        minWidth: 350,
        height: 190,
        flexDirection: 'row',
        backgroundColor: 'white',
        margin:5,
    },
    post_img: {
        width: 100,
        height: 140,
        margin: 5,
        backgroundColor: 'gray'
    },
    content_container: {
        flex:1,
        margin:5,
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        color:'#00263E',
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#00263E'
    },
})



