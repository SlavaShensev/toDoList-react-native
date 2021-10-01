import React from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native';

export const EditModal = ({visible}) => {
    return (
        <Modal visible={visible}>
            <View style={styles.wrap}>
                <TextInput />
                <Button title="Cancel"/>
                <Button title="Save"/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {

    }
});