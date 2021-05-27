import React from 'react'
import {  StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import ErrorMessage from '../components/forms/ErrorMessage'


const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(13).label('Name') ,
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

const RegisterScreen = () => {
    return (
        <Screen style={styles.container }>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
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
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})

export default RegisterScreen
