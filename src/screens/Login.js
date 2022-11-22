import { Button, StyleSheet, Text, TextInput, SafeAreaView, View, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useNavigation } from 'react'

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.png')}
          style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: 'bold',marginBottom:100}}>Book Buy</Text>
                <TextInput
                    style={styles.text}
                    placeholder='Username' />
                <TextInput
                    style={styles.text1}
                    placeholder='Password'
                    secureTextEntry={true} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        activeOpacity={.7} style={styles.btn}>
                        <Text style={styles.btnText}>LogIn</Text>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    text: {
        height: 50,
        width: '90%',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#7d5fff',
        textAlign: 'center',
    },
    text1: {
        height: 50,
        width: '90%',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#7d5fff',
        textAlign: 'center'
    },
    buttonContainer: {
        width: '90%',
        marginVertical: 15,
    },
    btn: {
        justifyContent: 'space-around',
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#7d5fff',
        alignItems: 'center',
        borderColor: '#666',
    },
    btnText: {
        fontWeight: 'bold',
        color: '#fff'
    }
})