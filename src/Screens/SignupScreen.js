import React, { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {}, []);

  const onBlur = () => {
    clearErrorMessage();
    navigation.navigate("Signin");
  };

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />

      <TouchableOpacity onPress={onBlur}>
        <Spacer>
          <Text style={styles.link}>Already have an account? Sign in instead!</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
    marginLeft: 50,
    marginRight:50
  },
  link: {
    color: "blue",
  },
});
export default SignupScreen;
