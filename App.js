import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";

import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <>
      <RegistrationScreen />
      <StatusBar style="auto" />
    </>
  );
}
