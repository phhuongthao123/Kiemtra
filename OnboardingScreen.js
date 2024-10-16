import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./onbording.png')} // Đảm bảo hình ảnh nằm trong thư mục assets
        style={styles.image}
      />
      <View style={styles.textContainer}>
        {/* Thêm hình ảnh 50x55 phía trên chữ "Welcome" */}
        <Image
          source={require('./icon.png')} // Đảm bảo hình ảnh nằm trong thư mục assets
          style={styles.iconImage}
        />

        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.storeText}>to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity style={styles.button} onPress={goToSignIn}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  // Style cho hình ảnh icon
  iconImage: {
    width: 50,
    height: 55,
    marginBottom: 10, // Khoảng cách giữa icon và chữ "Welcome"
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  storeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#34D399',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
