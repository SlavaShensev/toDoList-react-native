import React from 'react';
import {StyleSheet, View, TouchableOpacity} from "react-native";
import {AppTextBold} from "./AppTextBold";
import {THEME} from "../../theme";

export const AppButton = ({children, onPress, color = THEME.MAIN_COLOR}) => {

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.buttons, backgroundColor: color}}>
                <AppTextBold style={styles.text}>
                    {children}
                </AppTextBold>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttons: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff'
    }
})
