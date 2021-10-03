import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {THEME} from '../theme';
import {AppCart} from "../components/ui/AppCart";
import {EditModal} from "../components/EditModal";

export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {
    const [modal, setModal] = useState(false);
    const saveHandler = (title) => {
        onSave(todo.id, title)
        setModal(false)
    }
    return (
        <View>
            <EditModal visible={modal}
                       onCancel={() => setModal(false)}
                       onSave={saveHandler}
                       value={todo.title}
            />
            <Text>{todo.title}</Text>
            <AppCart style={styles.carts}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title="Edit" onPress={() => setModal(true)}/>
            </AppCart>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Back"
                            color={THEME.GREY_COLOR}
                            onPress={goBack}/>
                </View>
                <View style={styles.button}>
                    <Button title="Delete" color={THEME.DANGER_COLOR}
                            onPress={() => onRemove(todo.id)}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '40%',
    },
    carts: {
        marginBottom: 20,
        padding: 15,
    },
    title: {
        fontSize: 20,
    }
})
