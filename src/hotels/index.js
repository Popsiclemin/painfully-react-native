import React,{Component} from 'react'
import { FlatList ,Text} from 'react-native';
import ListCell from './ListCell';
import model from './model';

class HotelListView extends Component{

    constructor(props){
        super(props)
        this.dataSource = model;
    }

    fetchData = ()=>{
        return model;
    }


    renderItem = (item)=>{
        return (<ListCell source = {item}/>);
    }


    render(){
        return(
             <FlatList
                renderItem = {this.renderItem}
                data = {this.dataSource}
                

             />
        );
    }



}

module.exports = HotelListView