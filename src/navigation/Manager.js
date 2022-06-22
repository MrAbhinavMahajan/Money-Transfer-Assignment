import {screens} from '../utilities/Constants';

// Screens:-
import SplashScreen from './screens/splash/Splash';
import MainScreen from './screens/main/Main';
import RequestScreen from './screens/request/Request';
import SearchScreen from './screens/search/Search';

export const routeComponent = key => routeDetails(`${key}`).component;

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
          headerBackTitleVisible: true,
          headerTitleAlign: 'center',
          headerShown: true,
          orientation: 'portrait',
        },
      };
    case screens.RequestScreen:
      return {
        name,
        component: RequestScreen,
        options: {
          title: screens.RequestScreen,
          headerBackVisible: false,
          headerBackTitleVisible: true,
          headerTitleAlign: 'center',
          headerShown: true,
          orientation: 'portrait',
        },
      };
    case screens.SearchScreen:
      return {
        name,
        component: SearchScreen,
        options: {
          title: screens.SearchScreen,
          headerBackVisible: false,
          headerBackTitleVisible: true,
          headerTitleAlign: 'center',
          headerShown: true,
          orientation: 'portrait',
        },
      };
  }
};
