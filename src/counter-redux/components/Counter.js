import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';


 export default class Counter extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    const { counter, increment, decrement } = this.props;
    console.log('counter', counter, this.props)

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>显示数字：{ counter ? counter.count: 0}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>增加 + </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>减小 - </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});
