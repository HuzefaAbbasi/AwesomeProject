import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from "@zegocloud/zego-uikit-prebuilt-call-rn";
import { prototype } from "react-native-sound";

export default function VoiceCallPage(props) {
  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={1361597522}
        appSign={
          "fcd99a75e0fb3ba40b7fbc0a45d418ff203f0b50950bcb675e68723b48a50052"
        }
        userID={props.userID} // userID can be something like a phone number or the user id on your own user system.
        userName={props.userName}
        callID={props.callID} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onCallEnd: (callID, reason, duration) => {
            props.navigation.navigate("HomePage");
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
});
