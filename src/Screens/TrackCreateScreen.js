import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording, current, currentLocation },
    addLocation,
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      console.log(location);
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "add Track",
  tabBarIcon: <FontAwesome name="plus" size={24} />,
};

const styles = StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);

// import React, { useState, useEffect } from "react";
// import { Platform, Text, View, StyleSheet } from "react-native";
// import Constants from "expo-constants";
// import * as Location from "expo-location";

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         let { status } = await Location.requestPermissionsAsync();
//         if (status !== "granted") {
//           setErrorMsg("Permission to access location was denied");
//         }

//         let location = await Location.getCurrentPositionAsync({});
//         setLocation(location);
//       } catch (err) {
//         console.log(err);
//         console.log("errorsito");
//       }
//     })();
//   }, []);

//   let text = "Waiting..";
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   return (
//     <View>
//       <Text>Ok ahora si es verdad {text}</Text>
//     </View>
//   );
// }
