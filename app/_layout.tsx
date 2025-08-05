import { FocusAwareStatusBar } from "@/components/focus-aware-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import "react-native-reanimated";
import WebView from "react-native-webview";

export default function RootLayout() {
  const [site, setSite] = React.useState<string>("");

  const handleChange = (value: string) => {
    setSite(value);
  };

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar />
      <Text style={styles.title}>Digite um site:</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={handleChange}
        value={site}
      />
      <WebView
        source={{ uri: site }}
        style={{ flex: 1 }}
        startInLoadingState={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 40 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: { marginLeft: 10 },
});
