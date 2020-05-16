import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { updateUser, getUsers } from './actions/UserAction';

class App extends Component {
  
  componentDidMount = () => {
    this.props.onGetUser();
  };
  

  onUpdateUser=()=>{
    /* mapDispatchToProps yazilirsa buna gerek yok. yaptigi is onUpdateUser'a karsilik geln updateUser ile dispatch islemi
      this.props.dispatch(updateUser('Tom'));
    */
    this.props.onUpdateUser('Tom');
  }

  render(){
    return (
      <div className="App">
        <h2>{this.props.user}</h2>        
        <button onClick={this.onUpdateUser}>Change The Name</button>
      </div>
    );
  }
}

/*
  tun statelere ihtiyac yoksa
  const mapStateToProps=state=>({
    products:state.products
  })
*/

//  statetekileri props olarak kullanmak icin map islemi
const mapStateToProps=(state, props)=>{
  return {
    ...state,
    myCount:props.count+2
  };
  // return state; 
}

//  connecte 2.parametre ve dispatch edilen actionlari map islemi
const mapDispatchToProps={
  onUpdateUser:updateUser,
  onGetUser:getUsers
}

/*
//  hangi props'un nereden geldigini gormek icin
const mergeProps=(propsFromState, propsFromDispatch, ownProps)=>{
  console.log(propsFromState);
  console.log(propsFromDispatch);
  console.log(ownProps);
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
*/

export default connect(mapStateToProps, mapDispatchToProps)(App);
