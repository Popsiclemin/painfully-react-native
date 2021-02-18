import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  RefreshControl,
  ToastAndroid
} from 'react-native';


class ListViewDemo extends Component{


constructor(props){
  super(props)
  this.state = {
    selectedId:''
  };
  this.data = [];
  
  
}

 generateData() {
  for (let i = 0; i < 200; i++) {
    this.data.push({ id: `id${i}`, title: `number ${i}` })
  }
}

componentWillMount(){
  this.generateData()
}

wait(timeout){
  return new Promise(resolve => {
    setTimeout(resolve,timeout);
  });
}

_renderItem(item){
  const Item = ({ item, onPress, style }) => (

    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
  
      <Text style={styles.title}>{item.title}</Text>
  
    </TouchableOpacity>
  
  );

  const backgroundColor = item.id === '' ? "#aaa" : "#333";
  return (<Item
    item={item}
    onPress={this.setSelectedId(item.id).bind(this)}
    style={{ backgroundColor }}/>)
}

setSelectedId(item){
  
}

refreshing(){

}

onRefresh(){

}


render(){

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={this.data}
      renderItem={this._renderItem}
      keyExtractor={(item) => item.id}
      extraData={this.setSelectedId}
      refreshControl={
        <RefreshControl refreshing = {this.refreshing} onRefresh = {this.onRefresh}
         colors={[ '#FFFF00','#ff00ff','#00ffff']}/>
      }
    />
  </SafeAreaView>
  );
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#fff'
  },
});

module.exports = ListViewDemo
