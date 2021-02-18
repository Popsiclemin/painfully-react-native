import React, { useState } from 'react';
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


var DATA = [];
function generateData() {
  for (let i = 0; i < 200; i++) {
    DATA.push({ id: `id${i}`, title: `number ${i}` })
  }
  return DATA
}

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve,timeout);
  });
}


const Item = ({ item, onPress, style }) => (

  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>

    <Text style={styles.title}>{item.title}</Text>

  </TouchableOpacity>

);


const App = () => {

  const [selectedId, setSelectedId] = useState(null)

  const [refreshing,setRefreshing] = React.useState(false)
 

  console.log(...useState(null))
  const onRefresh = React.useCallback(()=>{
    setRefreshing(true);
    wait(2000).then(()=>setRefreshing(false)).then(
      ()=>{
        ToastAndroid.show('refresh completed!!!!',ToastAndroid.SHORT);
      }
    );
    
  },[])

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#aaa" : "#333";
    return (<Item
      item={item}
      onPress={() => setSelectedId(item.id)}
      style={{ backgroundColor }}
    />)
  }

  // const refreshView = ()=>()

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={generateData()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        refreshControl={
          <RefreshControl refreshing = {refreshing} onRefresh = {onRefresh}
           colors={[ '#FFFF00','#ff00ff','#00ffff']}/>
        }
      />
    </SafeAreaView>
  );
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

export default App;
