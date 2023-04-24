import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { useState, useEffect } from "react";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";

const fonts = {
  "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(fonts);
        SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }
  return (
    <>
      <RegistrationScreen />
      <StatusBar style="auto" />
    </>
  );
}
