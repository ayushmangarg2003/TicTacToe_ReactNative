/* eslint-disable prettier/prettier */
import { PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

type IconsProp = PropsWithChildren<{
    name: string
}>

const Icons = ({ name }: IconsProp) => {
    switch (name) {
        case 'circle':
            return <Text style={styles.zero} >O</Text>;
        case 'cross':
            return <Text style={styles.kata}>X</Text>;
        default:
            return <Text style={styles.dot}>.</Text>;
    }
};
const styles = StyleSheet.create({
    zero: {
        fontSize:24,
        color:'yellow',
    },
    kata: {
        fontSize:24,
        color:'green',
    },
    dot:{
        fontSize:24,
        color:'purple',
    }
})
export default Icons;
