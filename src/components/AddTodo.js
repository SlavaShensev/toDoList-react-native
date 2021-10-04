import React, {useState} from "react";
import {View, StyleSheet, TextInput, Button,Text, Alert} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {THEME} from "../theme";

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('');
    const pressHandler = () => {
        if(value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Todo task can not be empty')
        }
    }
    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                       onChangeText={setValue}
                       value={value}
                       placeholder="Add name task..."
                       autoCorrect={false}
            />
            <AntDesign.Button onPress={pressHandler} name="pluscircleo">
                Add
            </AntDesign.Button>
            {/*<Button title="Add" onPress={pressHandler}*/}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '60%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
    },
})
