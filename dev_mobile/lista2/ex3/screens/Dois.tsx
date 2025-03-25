import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default function Dois() {
    return(
        <View style={styles.container}>
            <View style={styles.cima}>
                <View style={styles.um} />
                <View style={styles.dois} />
            </View>
            <View style={styles.baixo}/ >
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: Constants.statusBarHeight,
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
    }
})