import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {THEME} from '../theme';

export const NavBar = ({title}) => {
    return (
        <View style={styles.navBar}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 20,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
})