/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import {StackNavigationProp} from '@react-navigation/stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  HomeScreen: undefined;
  BottomTab: {
    screen?: any;
    params?:any
  };
  MessageScreen: undefined;
  ProfileScreen: undefined;
  AppointmentsScreen: undefined;
  AppointmentDetailsScreen: undefined;
  AppointmentHistoryScreen: undefined;
  ChatScreen: undefined;
  PrescriptionScreen: undefined;
};

export type AuthStackParamList = {
  LoginScreen: undefined;
};

export type RootTabParamList = {
  HomeTab: undefined;
  MessageTab: undefined;
  AppointmentTab: undefined;
  ProfileTab: undefined;
};

export type ProfileScreenNavigationProp =
  StackNavigationProp<RootStackParamList>;

export type AuthScreenNavigationProp = StackNavigationProp<AuthStackParamList>;
