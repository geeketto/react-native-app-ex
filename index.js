// importare la libreria per creare un componente
import React from 'react';
import {Text, AppRegistry} from 'react-native';

// creare un componenete
const App = () => {
    return(
        <Text>Bananaaaaa</Text>
    );
};

// renderizzarlo come app
AppRegistry.registerComponent('Albums',()=> App)