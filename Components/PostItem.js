
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native'

export default class PostItem extends React.Component {


    render() {
        const { post, navigation, route } = this.props
        const { itemId } = route.params;
        return (
            <TouchableOpacity
                style={styles.main_container}
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('PostDetails', {
                    itemId: 28,
                    });
                }}>
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