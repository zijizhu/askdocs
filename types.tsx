import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  CompositeScreenProps,
  CompositeNavigationProp,
  NavigatorScreenParams
} from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  AuthFlow: NavigatorScreenParams<AuthFlowParamList> | undefined;
  QueryFlow: NavigatorScreenParams<QueryFlowParamList> | undefined;
  History: undefined;
  Profile: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type AuthFlowParamList = {
  Welcome: undefined;
  Login: {
    type: 'email' | 'phone';
  };
  Register: {
    type: 'email' | 'phone';
  };
  ResetPassword: {
    type: 'email' | 'phone';
  };
  ResetPasswordV: {
    type: 'email' | 'phone';
    value: string;
  };
  ResetPasswordFinal: undefined;
};

export type AuthFlowScreenProps<Screen extends keyof AuthFlowParamList> = CompositeScreenProps<
  StackScreenProps<AuthFlowParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type WelcomeNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AuthFlowParamList, 'Welcome'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export type RootTabParamList = {
  HomeScreen: undefined;
  HistoryScreen: undefined;
  ProfileScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type QueryFlowParamList = {
  NewQuery: {
    active: 'text' | 'camera' | 'library' | undefined;
  };
  Analyse: undefined;
  FoundDoctor: undefined;
  Waiting: undefined;
  Chat: undefined;
  DrProfile: undefined;
  DrReview: undefined;
};

export type QueryFlowScreenProps<Screen extends keyof QueryFlowParamList> = CompositeScreenProps<
  NativeStackScreenProps<QueryFlowParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type HistoryParamList = {
  History: undefined;
};

export type HistoryScreenProps<Screen extends keyof HistoryParamList> = CompositeScreenProps<
  NativeStackScreenProps<HistoryParamList, Screen>,
  BottomTabScreenProps<RootTabParamList>
>;
