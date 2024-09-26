import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WebView from 'react-native-webview';

const Stack = createStackNavigator();

const GAIAAgentChat = () => {
  const GAIA_AGENT_URL = process.env.GAIA_AGENT_URL || 'https://www.gaianet.ai/chat?subdomain=0x14c209deffc1a7c658c0870e885b27e061c0ae21.us.gaianet.network';

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: GAIA_AGENT_URL }}
        style={styles.webView}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="GAIAAgentChat"
          component={GAIAAgentChat}
          options={{
            title: 'GAIA Agent Chat',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default App;