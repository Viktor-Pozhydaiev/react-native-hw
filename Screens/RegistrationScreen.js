import { TouchableOpacity } from "react-native";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
} from "react-native";

export const RegistrationPage = () => {
  return (
    <View>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/register-bg.png")}
      >
        <View style={styles.form}>
          <Text style={styles.formTitle}>Registration</Text>
          <View>
            <TextInput
              style={styles.input}
              textAlign={"left"}
              placeholder={"Login"}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.input}
              textAlign={"left"}
              placeholder={"Email"}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              textAlign={"left"}
              placeholder={"Password"}
            />
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text>Register up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aff",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    width: 415,
    height: 812,
  },
  input: {
    borderWidth: 1,
    borderColor: "#8a2be2",
    height: 50,
    borderRadius: 6,
    color: "#f0f8ff",
  },
  form: {
    position: "absolute",
    backgroundColor: "#fffff",
    marginHorizontal: 40,
  },
  formTitle: {
    height: 36,
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
  },
  btn: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    height: 51,
    left: 16,
    right: 16,
    bottom: 113,
    backgroundColor: "#ffa500",
    borderRadius: 100,
  },
});
