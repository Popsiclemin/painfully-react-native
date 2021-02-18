/**
 * @format
 */

import {AppRegistry} from 'react-native';

import App from './App'

import Palyground from './Playground'

AppRegistry.registerComponent("CounterDemo", ()=>require('./src/counter/index'));

AppRegistry.registerComponent("CounterRedux",()=>require('./src/counter-redux/containers/App'))

AppRegistry.registerComponent("CityList", ()=>require('./src/cityList/index'));

AppRegistry.registerComponent("ListView",()=>require('./src/list'));

AppRegistry.registerComponent("HotelList",()=>require('./src/hotels'));

AppRegistry.registerComponent("Async", () => Palyground);



