import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from 'expo-constants';

export default function Dois() {
    return(
        <View style={styles.container}>
            <View style={styles.cima}>
                <View style={styles.um} />
                <View style={styles.dois}>
                    <View style={styles.tres}/>
                    <View style={styles.quatro}/>
                </View>
            </View>
            <View style={styles.baixo} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        width: "100%"
    },
    cima: {
        flex: 0.5,
        flexDirection: "row",
    },
    baixo: {
        flex: 0.5,
        backgroundColor: 'salmon',
    },
    um: {
        flex: 0.5,
        backgroundColor: "lime",
    },
    dois: {
        flex: 0.5,
        backgroundColor: "aquamarine",
        flexDirection: "column",
    },
    tres: {
        flex: 0.5,
        backgroundColor: "teal",
    },
    quatro: {
        flex: 0.5,
        backgroundColor: "skyblue",
    }
})