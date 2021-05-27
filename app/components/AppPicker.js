import React, {useState} from 'react'

import { View, TextInput, StyleSheet, Text, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText/AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'

const AppPicker = ({
    icon,
    items,
    numberOfColumns = 1,
    onSelectItem,
    PickerItemComponent = PickerItem,
    selectedItem,
    placeholder,    
}) => {

    const [isVisible, setIsVisible] = useState(false)

    return (
    <>
        <TouchableWithoutFeedback onPress={() => setIsVisible(true)} >
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
                    {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}
                <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
            </View>
        </TouchableWithoutFeedback>
            <Modal visible={isVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setIsVisible(false)} />
                        <FlatList 
                            data={items}
                            keyExtractor={item => item.value.toString()}
                            numColumns={numberOfColumns}
                            renderItem={({ item }) => 
                                <PickerItemComponent
                                    item={item}
                                    label={item.label}
                                    onPress={() =>{
                                        setIsVisible(false)
                                        onSelectItem(item)
                                    }} 
                                />}  />
                </Screen>
            </Modal>
        
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1,
      },
    text: {
        flex: 1,
    }
})

export default AppPicker
