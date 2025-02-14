import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Lab43 from './assi';
// import RegisterScreen from './assi/register'; 
import Lap51 from './lap5';
// const Stack = createStackNavigator();
/*
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Lab43} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};*/
const App =()=>{
  return <Lap51></Lap51>  
}
export default App;
/*lap 5 
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Lab51 from "./lap5";

SplashScreen.preventAutoHideAsync();
const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/font/DarumadropOne-Regular.ttf"),
  });
// };
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => {
      setFontLoaded(true);
      SplashScreen.hideAsync(); // Ẩn Splash Screen khi font đã load xong
    });
  }, []);

  if (!fontLoaded) {
    return null; // Hiển thị màn hình trắng tạm thời
  }

  return (
    <View>
      <Lab51 />
    </View>
  );
}*/



