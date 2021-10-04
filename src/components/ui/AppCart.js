import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const AppCart = (props) => <View style={ {...styles.default, ...props.style} }>
    {props.children}
</View>


const styles = StyleSheet.create({
    default: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: 'red',
      shadowRadius: 2,
      shadowOpacity: 0.3,
      shadowOffset: { width:2, height: 2 },
      elevation: 8,
      // backgroundColor: 'rgba(255,255,255,0.46)',
      borderRadius: 10,
    }
})
