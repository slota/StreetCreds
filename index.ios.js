'use strict';

var React = require('react');
var ReactNative = require('react-native');
var SearchPage = require('./SearchPage');

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class StreetCredApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Street Creds',
          component: SearchPage,
        }}/>
    );
  }
}

ReactNative.AppRegistry.registerComponent('StreetCred', function() { return StreetCredApp });
