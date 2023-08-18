import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import getTemp from './app/getTemp';


export default function App() {

  const {TempFahren, setFahren, FahrenheitToCelsius, TempCelsius, setCelsius}=getTemp('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fahrenheit-Celsius</Text>
      <TextInput inputMode="numeric" style={styles.input} placeholder="Ingrese Fahrenheit" onChangeText={(text) => setFahren(text)}/>
      <TouchableOpacity style={styles.button} onPress={FahrenheitToCelsius}>
        <Text style={styles.buttonText}>Convertir</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{TempCelsius}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'monospace',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
