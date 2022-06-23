import React from 'react';
import {TextInput} from 'react-native';
import {screens, colors} from '../utilities/Constants';
import {CommonActions} from '@react-navigation/native';

// Screens:-
import SplashScreen from './screens/splash/Splash';
import MainScreen from './screens/main/Main';
import RequestScreen from './screens/request/Request';
import SearchScreen from './screens/search/Search';
import {styles} from './Stylesheet';

export const routeComponent = key => routeDetails(key).component;

export const routeOptions = key => routeDetails(`${key}`).options;

// Every Route Screen :-
const routeDetails = key => {
  let name = screens[`${key}`];

  switch (key) {
    case screens.SplashScreen:
      return {
        name,
        component: SplashScreen,
        options: {
          title: screens.SplashScreen,
          headerBackVisible: false,
          headerBackTitleVisible: true,
          headerTitleAlign: 'center',
          headerShown: false,
          orientation: 'portrait',
        },
      };

    case screens.MainScreen:
      return {
        name,
        component: MainScreen,
        options: {
          title: screens.MainScreen,
          headerBackVisible: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerShown: false,
          orientation: 'portrait',
        },
      };

    case screens.RequestScreen:
      return {
        name,
        component: RequestScreen,
        options: {
          title: 'New Request',
          headerBackVisible: true,
          headerBackTitleVisible: true,
          headerTitleAlign: 'center',
          headerShown: true,
          orientation: 'portrait',
          headerTintColor: '#FFF',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: colors.darkBlue,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {color: colors.white},
        },
      };

    case screens.SearchScreen:
      return {
        name,
        component: SearchScreen,
        options: ({navigation, route}) => ({
          headerTitle: props => (
            <TextInput
              placeholder="Search"
              placeholderTextColor={colors.lightOffWhite}
              style={styles.searchTextInput}
              onChangeText={text => {
                navigation.dispatch(CommonActions.setParams({searchKey: text}));
              }}
            />
          ),
          headerBackVisible: true,
          headerBackTitleVisible: true,
          headerTitleAlign: 'center',
          headerShown: true,
          orientation: 'portrait',
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: colors.darkBlue,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {color: colors.white},
        }),
      };
  }
};
