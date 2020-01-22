import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
export default class Splash extends Component {
    render() {
        return (
            <View style={styles.editContain}>
                <Image source={{ uri: "https://cdn.dribbble.com/users/2424079/screenshots/4896763/dribbble_1_copy.png" }} style={ImgStyle.fix}></Image>
                <Text style={styles.title}>Welcome to ToDoApp with React Native.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    editContain: {
        backgroundColor: 'whitesmoke',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        position: 'relative',
    },
    title: {
        position: 'absolute',
        //top: '30%',
        marginTop: '50px',
        left: '10%',
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20,
    }
})

const ImgStyle = StyleSheet.create({
    fix: {
        width: '50vw',
        height: '30vh',
        zIndex: 999,
    }
})

