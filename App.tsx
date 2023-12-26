import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/component/Home';
import Aktivitas from './src/component/Aktivitas';
import Akun from './src/component/Akun';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Aktivitas') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Akun') {
              iconName = focused ? 'time' : 'time-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          showLabel: false,
          style: {
            backgroundColor: '#ffc125',
            height: 60,
          },
        }}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Aktivitas' component={Aktivitas} />
        <Tab.Screen name='Akun' component={Akun} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
