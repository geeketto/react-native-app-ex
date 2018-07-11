// importare la libreria per creare un componente
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// creare un componenete
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
    
);

// renderizzarlo come app
AppRegistry.registerComponent('Albums', () => App);
