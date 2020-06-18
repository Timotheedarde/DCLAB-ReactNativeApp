
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native'

export default class PostItem extends React.Component {



    render() {
        const { post, displayDetailForPost, navigation } = this.props
        return (
            <TouchableOpacity
                style={styles.main_container}
                onPress={() => { displayDetailForPost(post.id) }}>
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{post.title.rendered}</Text>
                        <Text style={styles.excerpt_text}>{post.excerpt.rendered}</Text>
                    </View>
                </View>
            </TouchableOpacity >
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
})