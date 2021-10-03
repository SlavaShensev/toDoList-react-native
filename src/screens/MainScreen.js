import React from 'react';
import {StyleSheet, View, FlatList, Image, Text} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
    let content =  <FlatList keyExtractor={item => item.id.toString()}
                             data={todos}
                             renderItem={({item}) =>
                                 <Todo todo={item}
                                       onRemove={removeTodo}
                                       onOpen={openTodo}
                                 />}
    />
    if(todos.length === 0) {
            content = <View styles={styles.imgWrap}>
                <Image style={styles.img}
                    // source={require('../../assets/img_hg.png')}
                       source={{
                           uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
                       }}
                />
            </View>
    }
    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 100,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})
