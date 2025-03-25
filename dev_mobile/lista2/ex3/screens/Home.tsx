import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text, Image, StatusBar} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import fatecLogo from '../assets/fatec.png';

// Define os tipos das telas
type RootStackParamList = {
  Home: undefined;
  Um: undefined;
  Dois: undefined;
  Tres: undefined;
  Quatro: undefined;
  Cinco: undefined;
  Seis: undefined;
  Sete: undefined;
  Oito: undefined;
  Nove: undefined;
  Dez: undefined;
};

// Tipagem das props de navegação
type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
        <StatusBar 
          barStyle="dark-content"  // Ícones de cor escura
          backgroundColor="black"  // Cor de fundo preta
          hidden={false} 
        />

        <View style={styles.moldura}>
            <Image source={fatecLogo} style={styles.imagem}/>
            <Text style={styles.texto}>HOME</Text>
            <View style={styles.container_meio}>

                <TouchableOpacity style={styles.btn}>
                    <Button title="Um" onPress={() => navigation.navigate('Um')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Button title="Dois" onPress={() => navigation.navigate('Dois')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Button title="Tres" onPress={() => navigation.navigate('Tres')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Button title="Quatro" onPress={() => navigation.navigate('Quatro')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Button title="Cinco" onPress={() => navigation.navigate('Cinco')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Button title="Seis" onPress={() => navigation.navigate('Seis')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Button title="Sete" onPress={() => navigation.navigate('Oito')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Button title="Oito" onPress={() => navigation.navigate('Oito')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Button title="Nove" onPress={() => navigation.navigate('Nove')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Button title="Dez" onPress={() => navigation.navigate('Dez')} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que a view ocupe toda a tela
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    height: "100%",
    width: "100%",
  },
  container_meio: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    flexWrap: "wrap", 
    gap: 10
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    width: "45%",
    borderRadius: 6,
  },
  moldura: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    margin: 15,
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
  },
  texto: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 15,
  },
  imagem: {
    marginBottom: 10,
    marginTop: 10,
  }
});