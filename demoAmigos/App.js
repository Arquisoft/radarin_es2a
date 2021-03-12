/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button, ThemeProvider, colors, Avatar, ListItem, Card, Divider, Input, Tooltip } from 'react-native-elements';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
};

const listAmigos = [
  {
    name: 'Pepe López',
    avatar_url: 'ruta_imagen'
  },
  {
    name: 'Marta Pérez',
    avatar_url: 'ruta_imagen'
  }
]

const App: () => React$Node = () => {



  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <Header />
          {global.HermesInternal == null ? null : (
            <View>
              <Text>Engine: Hermes</Text>
            </View>
          )}
          <View>

            <Card>
              <Tooltip popover={<Text>Encuentra tus amigos</Text>}>
                <Card.Title h3>AMIGOS</Card.Title>
              </Tooltip>
              <Input
                placeholder='Buscar...'
              />
              <Card.Divider />
              {
                listAmigos.map((l, i) => (
                  <ListItem key={i} bottomDivider onPress={() => console.log("Works!")} >
                    <Avatar
                      rounded
                      title={l.name[0] + l.name[1]}
                      source={{ uri: l.avatar_url }}
                      size="medium" />
                    <ListItem.Content>
                      <ListItem.Title>{l.name}</ListItem.Title>
                    </ListItem.Content>

                  </ListItem>
                ))
              }
            </Card>

            <ThemeProvider theme={theme}>
              <Button title="Actualizar" />
            </ThemeProvider>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



export default App;
