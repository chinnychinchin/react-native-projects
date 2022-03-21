import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import CounterScreenUseReducer from "./src/screens/CounterScreenUseReducer";
import SquareScreenUseReducer from "./src/screens/SquareScreenUseReducer";
import PasswordValScreen from "./src/screens/PasswordValidatorScreen";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    CounterUseReducer: CounterScreenUseReducer,
    Colors: ColorScreen,
    Square: SquareScreen,
    SquareUseReducer: SquareScreenUseReducer,
    PasswordVal: PasswordValScreen,
    Box: BoxScreen,
    
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
