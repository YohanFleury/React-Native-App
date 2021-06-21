import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
 
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'


const initialMessages = [
    {
        id: 1,
        title: 'Titre 1',
        description: 'Message 1',
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Titre 2',
        description: 'Message 2',
        image: require('../assets/jacket.jpg')
    }

]

const MessagesScreen = () => {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log(item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => console.log('Messages chargés')}

            />
        </Screen>
        
    )
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen
