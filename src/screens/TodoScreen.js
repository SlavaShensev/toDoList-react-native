import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FontAwesome, AntDesign} from '@expo/vector-icons';
import {THEME} from '../theme';
import {AppCart} from "../components/ui/AppCart";
import {EditModal} from "../components/EditModal";
import {AppTextBold} from "../components/ui/AppTextBold";
import {AppButton} from "../components/ui/AppButton";

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
            <AppTextBold>{todo.title}</AppTextBold>
            <AppCart style={styles.carts}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20}/>
                </AppButton>
            </AppCart>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton color={THEME.GREY_COLOR} nPress={goBack}>
                        Back
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)}>
                        Delete
                    </AppButton>
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
