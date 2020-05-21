
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SplashScreen from './SplashScreen';
import HomeContainer from './containers/HomeContainer';
import ContactContainer from './containers/ContactContainer';
import EngineContainer from './containers/EngineContainer';
import BrakeContainer from './containers/BrakeContainer';
import BumperContainer from './containers/BumperContainer';
import ShockBrakeContainer from './containers/ShockBrakeContainer';
import WheelContainer from './containers/WheelContainer';
import TireContainer from './containers/TireContainer';

const SwitchNav = createSwitchNavigator(
    {
        SplashScreen,
        Home: HomeContainer,
        Engine : EngineContainer,
        Brake : BrakeContainer,
        Bumper : BumperContainer,
        ShockBrake : ShockBrakeContainer,
        Wheel : WheelContainer,
        Tire : TireContainer,
        Contact: ContactContainer,
    },
    {
        initialRouteName: 'SplashScreen'
    }
)

export default createAppContainer(SwitchNav);