import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Um from './screens/Um';
import Dois from './screens/Dois';
import Tres from './screens/Tres';
import Quatro from './screens/Quatro';
import Cinco from './screens/Cinco';
import Seis from './screens/Seis';
import Sete from './screens/Sete';
import Oito from './screens/Oito';
import Nove from './screens/Nove';
import Dez from './screens/Dez';

// Define os tipos para cada tela
type DraweParamList = {
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

const Drawer = createDrawerNavigator<DraweParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        screenOptions={{
          drawerStyle: {
            width: '85%', // Largura do menu
          },
          drawerActiveBackgroundColor: '#555',
          drawerActiveTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#5a5555', // Cor do topo da tela
          },
          headerTintColor: '#fff',
        }}
      >
        <Drawer.Screen  name="Um" component={Um} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="code-working" size={25} color={'#black'}/>
            )
          }}
        />
        <Drawer.Screen name="Dois" component={Dois} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="construct" size={25} color={'#black'}/>
            )
          }}
        />
        <Drawer.Screen name="Tres" component={Tres} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="folder" size={25} color={'#black'}/>
            )
          }}
        />
        <Drawer.Screen name="Quatro" component={Quatro} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="flashlight" size={25} color={'#black'}/>
            )
          }}
        />
        <Drawer.Screen name="Cinco" component={Cinco}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="globe" size={25} color={'#black'}/>
            )
          }}
        />
        <Drawer.Screen name="Seis" component={Seis} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="magnet" size={25} color={'#black'}/>
            )
          }}
        />
        <Drawer.Screen name="Sete" component={Sete}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="mic" size={25} color={'#black'}/>
            )
          }}
        />
        <Drawer.Screen name="Oito" component={Oito} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="logo-xbox" size={25} color={'#black'}/>
            )
          }}
        />
        <Drawer.Screen name="Nove" component={Nove} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="pizza" size={25} color={'#black'}/>
            )
          }}
        />
        <Drawer.Screen name="Dez" component={Dez} 
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="podium" size={25} color={'#black'}/>
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}