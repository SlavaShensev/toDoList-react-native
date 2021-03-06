import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {NavBar} from "./src/components/NavBar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

async function loadApplication() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
}

export default function App() {
    const [isReady, setIsReady] = useState(false);
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([
        {id: '1', title: 'Выучить React Native'},
    ]);
    if (!isReady) {
        return <AppLoading startAsync={loadApplication}
                           onError={err=>console.log(err)}
                           onFinish={()=>setIsReady(true)}
        />
    }
    const addTodo = (title) => {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title,
        }])
    }
    const removeTodo = (id) => {
        const todo = todos.find(t => t.id === id)
        Alert.alert(
            'Delete element',
            `Are you sure you want to delete ${todo.title}?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        setTodoId(null)
                        setTodos(prev => prev.filter(todo => todo.id !== id))
                    }
                },
            ],
            {cancelable: false}
        )
    }
    const updateTodo = (id, title) => {
        setTodos(old => old.map(todo => {
            console.log(old)
            if (todo.id === id) {
                todo.title = title
            }
            return todo
        }))
    }
    let content = (
        <MainScreen todos={todos}
                    addTodo={addTodo}
                    removeTodo={removeTodo}
                    openTodo={setTodoId}
        />
    )
    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId)
        content = <TodoScreen goBack={() => setTodoId(null)}
                              todo={selectedTodo}
                              onRemove={removeTodo}
                              onSave={updateTodo}
        />
    }
    return (
        <View style={styles.appView}>
            <NavBar title="Todo list"/>
            <View style={styles.container}>
                {content}
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
