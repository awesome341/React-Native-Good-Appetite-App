import { createStackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';

import RestaurantAddressMap from 'components/common/restaurant-detail/components/RestaurantAddressMap';
import DisheDetailReview from 'components/common/restaurant-detail/components/DisheDetailReview';
import RestaurantDetail from 'components/common/restaurant-detail';

import Search from './index';

export const ROUTE_NAMES = {
  RESTAURANT_ADDRESS_MAP: 'RESTAURANT_ADDRESS_MAP',
  FOOD_DETAIL_REVIEW: 'FOOD_DETAIL_REVIEW',
  RESTAURANT_DETAIL: 'RESTAURANT_DETAIL',
  SEARCH: 'SEARCH',
};

const ROUTES = createStackNavigator({
  [ROUTE_NAMES.SEARCH]: {
    screen: Search,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },

  [ROUTE_NAMES.RESTAURANT_DETAIL]: {
    screen: RestaurantDetail,
    navigationOptions: () => ({
      headerBackTitle: null,
      ...Platform.select({
        android: {
          headerStyle: {
            marginTop: StatusBar.currentHeight,
          },
        },
      }),
    }),
  },

  [ROUTE_NAMES.FOOD_DETAIL_REVIEW]: {
    screen: DisheDetailReview,
    navigationOptions: () => ({
      headerBackTitle: null,
      ...Platform.select({
        android: {
          headerStyle: {
            marginTop: StatusBar.currentHeight,
          },
        },
      }),
    }),
  },

  [ROUTE_NAMES.RESTAURANT_ADDRESS_MAP]: {
    screen: RestaurantAddressMap,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
});

ROUTES.navigationOptions = ({ navigation }) => {
  const tabBarVisible = navigation.state.index <= 0;

  return {
    tabBarVisible,
  };
};

export default ROUTES;
