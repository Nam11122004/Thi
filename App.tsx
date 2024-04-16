import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Them from './screens/Them';
import Menu from './screens/Menu';
import Sua from './screens/Sua';
import DuLieu from './screens/DuLieu';
import Hello from './screens/Hello';
import { Provider } from 'react-redux';
import store from './reduct_toolkit/store';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Hello">
          <Stack.Screen name="Menu" component={Menu} options={{ headerShown: true }} />
          <Stack.Screen name="Hello" component={Hello} options={{ headerShown: false }}/>
          <Stack.Screen name="DanhSach" component={DuLieu}  />
          <Stack.Screen name="Them" component={Them} />
          <Stack.Screen name="Update" component={Sua}  />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
