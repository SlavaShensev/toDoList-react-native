import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {THEME} from '../theme';
import {AppTextBold} from "./ui/AppTextBold";

export const NavBar = ({title}) => {
    return (
        <View style={styles.navBar}>
            <AppTextBold style={styles.text}>
                {title}
            </AppTextBold>
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
