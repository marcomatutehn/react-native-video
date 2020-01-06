/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list'
import API from './utils/api';



const App: () => React$Node = () => {

  useEffect(() => {
    (async function getMovies() {
      try {
        let response = await API.getSuggestion(5);
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  /*
  useEffect(() => {
    const fetchData = async () => {
      const movies = await API.getSuggestion(10);
      console.log('holi');
      console.log(movies);
    };
    return () => {
      fetchData();
    };
  });
*/

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header/>
          <Home>
            <Text>Buscador</Text>
            <Text>Categorias</Text>
            <SuggestionList
            />
          </Home>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Platform.select({
      ios: 'white',
      android: 'white',
    }),
  },
});

export default App;
