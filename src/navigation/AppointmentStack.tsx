import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Colors} from 'squashapps-react-native-uikit';
import AppointmentDetailsScreen from '../modules/AppointmentModule/AppointmentDetailsScreen';
import AppointmentHistoryScreen from '../modules/AppointmentModule/AppointmentHistoryScreen';
import AppointmentsScreen from '../modules/AppointmentModule/AppointmentsScreen';
import PrescriptionScreen from '../modules/AppointmentModule/PrescriptionScreen';
import Header from './Header';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppointmentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: Colors.WHITE},
      }}
      initialRouteName="AppointmentsScreen">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AppointmentsScreen"
        component={AppointmentsScreen}
      />
      <Stack.Screen
        options={{
          header: props => Header({props}),
          title: 'Appointment Details',
        }}
        name="AppointmentDetailsScreen"
        component={AppointmentDetailsScreen}
      />
      <Stack.Screen
        options={{
          header: props => Header({props}),
          title: 'Rahul Aravind',
        }}
        name="AppointmentHistoryScreen"
        component={AppointmentHistoryScreen}
      />
      <Stack.Screen
        options={{
          header: props => Header({props}),
          title: 'Prescription',
        }}
        name="PrescriptionScreen"
        component={PrescriptionScreen}
      />
    </Stack.Navigator>
  );
};

export default AppointmentStack;
