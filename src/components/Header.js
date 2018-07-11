import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
return (
    <View style={viewStyle}>
        <Text style={textStyle} >{props.headerText}</Text>
    </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColour: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }

};

export default Header;