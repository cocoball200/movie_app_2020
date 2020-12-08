import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };

  componentDidMount() {
    console.log("2.(componentDidMount)컴포넌트 렌더가 되었습니다 ");
  }
  componentDidUpdate() {
    console.log('3.(componentDidUpdate)막 업데이트 되었습니다.')
  }
  componentWillUnmount() {
    console.log('(componentWillUnmount)안녕 이제 끕니다~! ')
  }
  render() {
    console.log('1.(render)렌더 하는 중입니다.')
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
