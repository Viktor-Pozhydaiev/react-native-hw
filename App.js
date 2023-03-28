import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { RegistrationPage, LoginScreen } from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImg}
        source={require("./assets/images/register-bg.png")}
      >
        <KeyboardAvoidingView>
          <RegistrationPage />
          {/* <LoginScreen /> */}
        </KeyboardAvoidingView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
    ...Platform.select({
      ios: {
        justifyContent: "center",
      },
      android: {
        justifyContent: "flex-end",
      },
    }),
    // alignItems: "center",
  },
});
