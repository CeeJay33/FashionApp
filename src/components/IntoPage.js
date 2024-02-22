import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SecondScreen from './SecondScreen'; // Import the SecondScreen component

const Stack = createStackNavigator();

export default function IntoPage({ navigation }) {
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SecondScreen'); // Navigate to the second screen after 5 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(animationValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const scale = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2], // Scale will grow from 1 to 1.2 and then reduce back
  });

  return (
    <ImageBackground
      source={require('../../assets/istockphoto-174675570-612x612.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Animated.Text style={[styles.font, { transform: [{ scale }] }]}>FashionHub</Animated.Text>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Geted</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.descritpton}>
        <Text style={styles.descText}>Visit & Become a Fashion designer Today!</Text>
        <Text style={styles.descText}>SignUp Today!</Text>
      </View>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 900,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  font: {
    fontWeight: '600',
    color: '#fff',
    marginBottom: 20,
    fontSize: 40,
  },
  button: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  descritpton: {
    marginBottom: 90,
  },
  descText: {
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center',
    fontSize: 17,
  },
});
