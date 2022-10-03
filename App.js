import React, { useRef, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, DrawerLayoutAndroid, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  AppBar,
  IconButton,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#222423' }}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
      >
        <AppBar
          title="Wordaily"
          color="#222423"
          leading={props => (
            <IconButton
              icon={props => <Icon name="menu" {...props} />}
              onPress={() => drawer.current.openDrawer()}
              {...props}
            />
          )}
        />
        <View style={{ flex: 1, backgroundColor: '#181818' }} >

          <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        </View>
      </DrawerLayoutAndroid>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#222423"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  }
});
