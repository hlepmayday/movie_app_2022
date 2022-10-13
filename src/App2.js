/*
import React from 'react';
import Macaron from './Macaron';
import cakes from './cakes.json';


function App() { //부모컴포넌트
  return (
    <>
    <div>안녕하세요!</div>
    {cakes.map(cake => (
      <Macaron 
       propsid={cake.id}
       propsname={cake.name}
       propsimage={cake.image}
      />
    ))}
   
    
    </>
  );
}
*/
import React, {Component} from "react";
import Cake from "./Cake";

class App extends Component{
  constructor(props){
    super(props);
    console.log('constructor함수는 클래스형 컴포넌트가 생성할때 호출됨')
  }

  componentDidMount(){
    console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
  }

  componentDidUpdate(){
    console.log('componentDidUpdate함수는 화면이 새로그려지면 즉 업데이트 되면 실행되는 함수')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수')
  }

  state = {
    count: 0,
    sum: 0,
    avg: 0,
  };
  add = () => {
    console.log('더하기');
    //this.state.count = 1;
    //this.setState(current =>(
    // {count: current.count +1}// current는  this.state
    //  ))
    this.setState({count: this.state.count +1});
  }

  minus = () => {
    console.log('빼기');
    //this.state.count = -1;
    this.setState(current =>({
      count: current.count -1,
      sum:current.sum =2,
      avg: current.avg -3
    }))
  }

  render(){
    return(
      <>
      <div>
        <h1>현재 숫자는 {this.state.count}입니다</h1>
        <button onClick={this.add}>더하기</button>
        <button onClick={this.minus}>빼기</button>
      </div>
      <Cake />
      </>
    )
  }
}




export default App2;