
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native'

export default class PostItem extends React.Component {



    render() {
        const { forum, displayDetailForForum, navigation } = this.props
        return (
            <TouchableOpacity
                style={styles.main_container}
                onPress={() => { displayDetailForForum(forum.id) }}>
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{forum.title.rendered}</Text>
                        <Text style={styles.excerpt_text}>{forum.excerpt.rendered}</Text>
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