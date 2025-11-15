import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


SplashScreen.preventAutoHideAsync();

export default function App() { useEffect(() => { 
  SplashScreen.preventAutoHideAsync(); // evita que se oculte el splash screen de forma predeterminada 
  setTimeout(() => {
     SplashScreen.hideAsync(); // oculta después de 2s 
  }, 2000); }, []);

  

  return (
  <LinearGradient
    colors={["#4c669f", "#3b5998", "#192f6a"]}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  >
    <Text style={{ color: "white" }}>Pokemon ...</Text>
  </LinearGradient>
);

}
