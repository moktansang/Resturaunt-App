// VENDOR
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// APP
import ScreenSaver from '../ScreenSaver/ScreenSaver';
import Home from '../Home/Home';

/**
 * adds navigation props to all components
 * allows for routing, in a sense
 */ 
const navigator = createStackNavigator(
    {
        ScreenSaver: { screen: ScreenSaver },
        Home: {
            screen: Home,
            // disable swiping back to screensaver on Home page
            navigationOptions: {
                title: "Home",
                headerLeft: null,
                gesturesEnabled: false,
            }
        }
    }, 
    {
        headerMode: 'none'
    }
);

const AppNavigator = createAppContainer(navigator);

export default AppNavigator;