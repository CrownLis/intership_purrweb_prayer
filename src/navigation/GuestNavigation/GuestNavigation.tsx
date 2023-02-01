import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '@/navigation/GuestNavigation/SignUp';
import SignIn from '@/navigation/GuestNavigation/SignIn';
import Greetings from './Greetings/Greetings';
import { SignUpPayload } from '@/types/payload';
import { UnAuthRoutes } from '../routes';

export type GuestStackParamList = {
  [UnAuthRoutes.SignIn]: undefined;
  [UnAuthRoutes.SignUp]: undefined;
  [UnAuthRoutes.Greetings]: SignUpPayload;
};

const Stack = createNativeStackNavigator<GuestStackParamList>();

const GuestNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={(options) => ({
        ...options,
        animation: 'none',
        headerShown: false,
      })}
    >
      <Stack.Screen name={UnAuthRoutes.SignIn} component={SignIn} />
      <Stack.Screen name={UnAuthRoutes.SignUp} component={SignUp} />
      <Stack.Screen name={UnAuthRoutes.Greetings} component={Greetings} />
    </Stack.Navigator>
  );
};

export default GuestNavigation;