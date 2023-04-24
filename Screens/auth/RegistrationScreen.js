import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";

const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground style={styles.image}>
          <View style={styles.form}>
            <Text style={styles.header}>Реєстрація</Text>
            <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                value={name}
                onChangeText={nameHandler}
                placeholder="Логін"
                style={styles.input}
              />
              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="Адрес електронної пошти"
                secureTextEntry={true}
                style={styles.input}
              />
              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Пароль"
                secureTextEntry={true}
                style={styles.input}
              />
              <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.register}>Зареєструватися</Text>
                </TouchableOpacity>
                <Pressable>
                  <Text style={styles.registerAlready}>
                    Вже є аккаунт ? Увійти
                  </Text>
                </Pressable>
              </View>
            </KeyboardAvoidingView>
          </View>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    justifyContent: "flex-end",
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingTop: 60,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
  header: {
    color: "#212121",
    fontWeight: 500,
    fontSize: 30,
    alignSelf: "center",
    marginTop: 32,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 16,
    marginTop: 16,
    height: 50,
    borderRadius: 10,
  },
  buttonWrapper: {
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    position: "relative",
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginTop: 13,
  },
  register: {
    color: "white",
  },
  registerAlready: {
    fontSize: 16,
    lineHeight: 18,
    color: "#1B4371",
    marginTop: 16,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 78,
  },
});
export default RegistrationScreen;
