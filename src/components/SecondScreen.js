import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function SecondScreen({ navigation }) {
  const [showDesignerForm, setShowDesignerForm] = useState(false);

  const handleDesignerLogin = () => {
    setShowDesignerForm(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        {!showDesignerForm && (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}
        {showDesignerForm && (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Username"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Designation"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Company"
              autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login as Designer</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.heading2}>Or</Text>
      {!showDesignerForm && (
        <TouchableOpacity onPress={handleDesignerLogin}>
          <Text style={styles.signupText}>Login as a Fashion designer</Text>
        </TouchableOpacity>
      )}
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heading2: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 900,
  },
  form: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 20,
    color: '#007bff',
    fontSize: 17,
  },
});
