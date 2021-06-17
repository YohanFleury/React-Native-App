import React, { useState } from 'react'
import {  StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import ErrorMessage from '../components/forms/ErrorMessage'
import usersApi from '../api/users'
import useAuth from '../auth/useAuth'
import authApi from '../api/auth'
import useApi from '../hooks/useApi'
import ActivityIndicator from '../components/ActivityIndicator'


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(13).label('Name') ,
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

const RegisterScreen = () => {
    const registerApi = useApi(usersApi.register)
    const loginApi = useApi(authApi.login)
    const auth = useAuth()
    const [error, setError] = useState()

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo)

        if (!result.ok) {
            if (result.data) setError(result.data.error)
            else {
                setError('An unexpected error occured.')
                console.log(result)
            }
            return
        }

        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        )
        auth.logIn(authToken)
    }

    return (
        <>
        <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
            <Screen style={styles.container }>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <ErrorMessage error={error} visible={touched.name} />
                        <AppTextInput 
                            autoCapitalize="words"
                            autoCorrect={false}
                            icon="account"
                            onBlur={() => setFieldTouched("name")}
                            onChangeText={handleChange("name")}
                            placeholder="Name"
                            textContentType="username"
                        />
                        <ErrorMessage error={errors.name} visible={touched.name} />
                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onBlur={() => setFieldTouched("email")}
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <ErrorMessage error={errors.email} visible={touched.email} />
                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onBlur={() => setFieldTouched("password")}
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry={true}
                            textContentType="password"
                        />
                        <ErrorMessage error={errors.password} visible={touched.password} />
                        
                        <AppButton title="Register" onPress={handleSubmit} />
                    </>
                )}

            </Formik>
            
            
        </Screen>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})

export default RegisterScreen
