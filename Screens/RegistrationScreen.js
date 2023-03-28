import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

export const RegistrationPage = () => {
  const [isShowKey, setIsShowKey] = useState(false);

  const toggleKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={{ ...styles.form, paddingBottom: isShowKey ? 45 : 100 }}>
      <View style={styles.avatar}></View>
      <Text style={styles.formTitle}>Реєстрація</Text>
      <View style={styles.logInput}>
        <TextInput
          style={styles.input}
          textAlign={"left"}
          placeholder={"Логін"}
          onFocus={() => setIsShowKey(true)}
        />
      </View>
      <View style={styles.emailInput}>
        <TextInput
          style={styles.input}
          textAlign={"left"}
          placeholder={"Адреса електронної пошти"}
          onFocus={() => setIsShowKey(true)}
        />
      </View>
      <View style={styles.passInput}>
        <TextInput
          style={styles.input}
          textAlign={"left"}
          placeholder={"Пароль"}
          secureTextEntry={true}
          onFocus={() => setIsShowKey(true)}
        />
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.regBtn}
          onPress={toggleKeyboard}
        >
          <Text style={styles.btnTitle}>Реєстрація</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.linkTitle}>Вже є обліковий запис? Увійти</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    left: 138,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },
  form: {
    bottom: 0,
    margin: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },
  formTitle: {
    paddingTop: 32,
    paddingBottom: 33,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: "center",
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    height: 50,
    borderRadius: 10,
    color: "#212121", //#212121
    marginHorizontal: 16,
    fontSize: 16,
    lineHeight: 19,
  },
  emailInput: {
    marginTop: 16,
  },
  passInput: {
    marginTop: 16,
    marginBottom: 32,
  },
  regBtn: {
    display: "flex",
    justifyContent: "center",
    marginHorizontal: 16,
    height: 51,
    borderRadius: 100,
    backgroundColor: "#ff6c00",
  },
  btnTitle: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#ffffff",
  },
  linkTitle: {
    paddingTop: 16,
    textAlign: "center",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
});
