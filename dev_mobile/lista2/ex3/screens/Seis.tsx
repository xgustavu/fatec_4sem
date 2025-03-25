import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert, StatusBar, Text, TextInput, Button, Keyboard } from "react-native";
import Constants from 'expo-constants';

export default function Dois() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(""); 
    const [dadosSalvos, setDadosSalvos] = useState<{ nome: string; idade: string } | null>(null);

    const handleSalvar = () => {
        if (nome.trim() === "" || idade.trim() === "") {
            alert("Preencha todos os campos!");
            return;
        }
        setDadosSalvos({ nome, idade }); 
        Keyboard.dismiss();
    };

    return(
        <View style={styles.container} >
            <StatusBar barStyle="light-content" hidden={false}/>

            <View style={styles.container_input}>
                <Text style={styles.texto}>Nome</Text>
                <TextInput 
                    style={styles.input} 
                    value={nome} 
                    onChangeText={setNome}
                />
            </View>
            <View style={styles.container_input}>
                <Text style={styles.texto}>Idade</Text>
                <TextInput 
                    style={styles.input} 
                    value={idade} 
                    onChangeText={setIdade} 
                    maxLength={3}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSalvar}>
                <Text style={styles.texto}>Salvar</Text>
            </TouchableOpacity>

            {dadosSalvos && (
                <View style={styles.resultado}>
                    <Text style={styles.resultadoTexto}>Nome: {dadosSalvos.nome}</Text>
                    <Text style={styles.resultadoTexto}>Idade: {dadosSalvos.idade}</Text>
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: Constants.statusBarHeight,
        width: "100%",
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
    },
    texto: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    input: {
        paddingLeft: 10,
        width: "100%",
        height: 30,
        backgroundColor: "white",
        fontSize: 20,
        borderRadius: 8,
        marginTop: 5,
    },
    container_input: {
        display: "flex",
        width: "90%",
        marginTop: 5,
    },
    container_buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "50%",
    },
    button: {
        backgroundColor: "blue",
        marginTop: 10,
        padding: 8,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    resultado: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#444",
        borderRadius: 5,
        width: "90%",
        justifyContent: "center",
    },
    resultadoTexto: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
})