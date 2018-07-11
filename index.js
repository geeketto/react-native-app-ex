// importare la libreria per creare un componente
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './components/Header';

// creare un componenete
const App = () => (
    <Header />
);

// renderizzarlo come app
AppRegistry.registerComponent('Albums', () => App);
