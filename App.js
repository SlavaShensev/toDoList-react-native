import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavBar} from "./src/components/NavBar";
import {MainScreen} from "./src/screens/MainScreen";

export default function App() {
    const [todos, setTodos] = useState([]);
    const addTodo = (title) => {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title,
        }])
    }
    const removeTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }
    return (
        <View style={styles.appView}>
            <NavBar title="Todo list"/>
            <View style={styles.container}>
                <MainScreen todos={todos}
                            addTodo={addTodo}
                            removeTodo={removeTodo}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appView: {
        backgroundColor: 'rgba(0,0,0,0.23)',
        flex: 1,
    },
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
});
