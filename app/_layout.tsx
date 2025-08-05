import { FocusAwareStatusBar } from "@/components/focus-aware-status-bar";
import { View } from "react-native";
import "react-native-reanimated";
import WebView from "react-native-webview";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <FocusAwareStatusBar />
      <WebView
        source={{ uri: "https://www.google.com/" }}
        style={{ flex: 1 }}
        startInLoadingState={true}
      />
    </View>
  );
}
