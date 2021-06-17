import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import AppButton from '../AppButton'
import ErrorMessage from './ErrorMessage'


const AppFormField = ({ name, ...otherProps }) => {

    const {setFieldTouched, errors, touched, setFieldValue, values } = useFormikContext()

    return (
        <>
            <AppTextInput 
                onBlur={() => setFieldTouched(name)}
                onChangeText={(text) => setFieldValue(name, text)}
                value={values[name]}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />  
        </>
    )
}

export default AppFormField
