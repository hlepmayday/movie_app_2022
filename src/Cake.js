import React, {Component} from "react";

class Cake extends Component{
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
    price: 10000,
    sale: 0
  };

  sale = () =>{
    console.log('할인');
    this.setState({price: this.state.price*0.7});
  }
  

  render(){
    return(
      <div>
        <h1>cake 가격: {this.state.price}</h1>
        <h2>할인 가격: {this.state.sale}</h2>
        <button onClick={this.sale}>할인</button>
      </div>
    )
  }
}

export default Cake;