import {
  DashboardScreen,
  SearchScreen,
  AddPostScreen,
  NotificationScreen,
  ProfileScreen,
  AddStoryScreen,
  DirectMessageScreen,
  SignInScreen,
} from '../Containers'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation'

const MenuTabNavigator = createBottomTabNavigator(
  {
    Dashboard: DashboardScreen,
    Search: SearchScreen,
    AddPost: AddPostScreen,
    Notification: NotificationScreen,
    Profile: ProfileScreen,
  },
  {
    animationEnabled: true,
    initialRouteName: 'Dashboard',
    tabBarOptions: {
      showLabel: false,
    },
  }
)

const MainAppNavigator = createMaterialTopTabNavigator(
  {
    AddStory: AddStoryScreen,
    Menu: MenuTabNavigator,
    DirectMessage: DirectMessageScreen,
  },
  {
    initialRouteName: 'Menu',
    tabBarComponent: null,
    swipeEnabled: (props) => {
      const index = props.index
      const firstRoute = props.routes[index]
      if (firstRoute.routeName === 'Menu') {
        const nextRoute = firstRoute.routes[firstRoute.index]
        if (nextRoute.routeName === 'Dashboard') {
          return true
        }
        return false
      }
      return true
    },
    animationEnabled: true,
  }
)

const AuthNavigator = createStackNavigator(
  {
    Main: MainAppNavigator,
  },
  {
    headerMode: 'none',
  }
)

const GuestNavigator = createStackNavigator(
  {
    SignIn: SignInScreen,
  },
  {
    headerMode: 'none',
  }
)

const AppNavigator = createSwitchNavigator(
  {
    Guest: GuestNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'Guest',
  }
)

export default createAppContainer(AppNavigator)
