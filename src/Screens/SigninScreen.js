import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text } from "react-native-elements";
import AuthForm from "../components/AuthForm";
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-navigation";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  const onBlur = () => {
    clearErrorMessage();
    navigation.navigate("Signup");
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />

      <TouchableOpacity onPress={onBlur}>
        <Spacer>
          <Text style={styles.link}>You don't have an account? Sign up!</Text>
        </Spacer>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150
  },
  container: {
    flex: 1,
    marginRight: 50,
    marginLeft: 50,
    marginTop:50
  },
  link: {
    color: "blue",
  },
});
export default SigninScreen;
