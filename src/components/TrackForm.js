import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations, currentLocation },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();
  return (
    <>
      <Spacer>
        <Input placeholder="Enter name" onChangeText={changeName} />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop recording" onPress={stopRecording}></Button>
        ) : (
          <Button title="Start recording" onPress={startRecording}></Button>
        )}
      </Spacer>
      <Spacer>{!recording && locations.length ? <Button title="Save Recording" onPress={saveTrack} /> : null}</Spacer>
    </>
  );
};

export default TrackForm;
