import {Button, SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

export const HelloPage = () => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Button title="Open Menu" onPress={() => navigate('MenuRooter')} />
      </ScrollView>
    </SafeAreaView>
  );
};
