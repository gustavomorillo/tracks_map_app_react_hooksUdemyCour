import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText, state }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input label="Email" autoCapitalize="none" autoCorrect={false} value={email} onChangeText={setEmail} />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({ email, password })}></Button>
      </Spacer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;
