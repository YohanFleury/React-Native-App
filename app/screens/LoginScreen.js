import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/forms/SubmitButton'
import AppForm from '../components/forms/AppForm'
import authApi from '../api/auth'
import ErrorMessage from '../components/forms/ErrorMessage'
import useAuth from '../auth/useAuth'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})


const LoginScreen = () => {

    const { logIn } = useAuth()
    const [loginFailed, setLoginFailed] = useState(false)

    const handleSubmit = async ({ email, password }) => {
       const result = await authApi.login(email, password)
       
       !result.ok ? setLoginFailed(true) : setLoginFailed(false)
       logIn(result.data)
    }
    
    return (
        <Screen style={styles.container }>
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid email and/or password." visible={loginFailed} />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password"
                />
                <SubmitButton title="login" />

            </AppForm>
            
            
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})

export default LoginScreen
