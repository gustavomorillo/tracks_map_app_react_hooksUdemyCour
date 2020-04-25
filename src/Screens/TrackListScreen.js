import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";

const TrackListScreen = ({ navigation }) => {
  const { fetchTracks, state } = useContext(TrackContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchTracks} />

      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("TrackDetail", { _id: item._id })}>
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
      <Button title="Go to Track Detail" onPress={() => navigation.navigate("TrackDetail")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});
export default TrackListScreen;
