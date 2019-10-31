import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import store from './redux'
import Main from './components/Main'
import Title from './components/Title'

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.root}>
        <Title />
        <Main />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
})

export default App
