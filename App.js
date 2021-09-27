import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from "./src/screens";

function App() {
    return (
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    );
}

export default App;
