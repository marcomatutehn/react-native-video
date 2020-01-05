import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

const Header = (props) => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.logo}
                />
                <View style={styles.right}>
                    {props.children}
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain',
    },
    container: {
        padding:10,
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    right: {
        backgroundColor: 'green',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

export default Header;
