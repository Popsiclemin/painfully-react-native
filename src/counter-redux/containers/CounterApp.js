import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/Counter';
import * as counterActions from '../actions/actions';
import { connect } from 'react-redux';

class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, actions } = this.props;
    
    console.log("counter:"+counter,{...actions},this.props)
    return (
      <Counter
        counter={counter}
        {...actions} />
    );
  }

}
const mapStateToProps = (state) =>(
  {
    counter:state.counter
  }
)

const mapDispatchToProps = dispatch =>(
    {
      actions:bindActionCreators(counterActions,dispatch)
    }
  )

export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);