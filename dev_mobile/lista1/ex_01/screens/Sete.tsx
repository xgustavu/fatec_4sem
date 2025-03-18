import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert, StatusBar, Text, TextInput, Button, Keyboard } from "react-native";
import Constants from 'expo-constants';

export default function Dois() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState(""); 
    const [dadosSalvos, setDadosSalvos] = useState<{ email: string; senha: string } | null>(null);

    const handleSalvar = () => {
        if (email.trim() === "" || senha.trim() === "") {
            alert("Preencha todos os campos!");
            return;
        }
        setDadosSalvos({ email, senha }); 
        Keyboard.dismiss();
    };

    return(
        <View style={styles.container} >
            <StatusBar barStyle="light-content" hidden={false}/>

            <View style={styles.container_input}>
                <Text style={styles.texto}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect={false}
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.container_input}>
                <Text style={styles.texto}>Senha</Text>
                <TextInput
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                    maxLength={8}
                />
            </View>

            <View style={styles.container_buttons}>
                <TouchableOpacity style={styles.button} onPress={handleSalvar}>
                    <Text style={styles.texto}>Logar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.texto}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>

            {dadosSalvos && (
                <View style={styles.resultado}>
                    <Text style={styles.resultadoTexto}>Nome: {dadosSalvos.email}</Text>
                    <Text style={styles.resultadoTexto}>Senha: {dadosSalvos.senha}</Text>
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        width: "100%",
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
    },
    texto: {
        fontSize: 20,
        color: "white",
    },
    titulo: {
        fontSize: 25,
        fontWeight: "bold",
        color: "yellow"
    },
    input: {
        paddingLeft: 10,
        width: "100%",
        height: 30,
        backgroundColor: "white",
        fontSize: 15,
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
        backgroundColor: "orange",
        marginTop: 10,
        padding: 8,
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
        fontSize: 14,
        fontWeight: "bold",
    },
    container_moldura: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        width: 270,
        justifyContent: "center",
        alignItems: "center"
    },
})