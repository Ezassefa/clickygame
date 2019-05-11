import React, { Component } from "react";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper"
import Card from "./components/Card/Card";
import Data from "./data.json";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.shuffle.cards,
      topScore: 0,
      currentScore: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick() {
    this.setState({  })
    }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  componentDidMount() {
    
  }

  render() {
    console.log(Data)
    return (
      <div>
        <Header
          topScore={this.state.topScore}
          currentScore={this.state.currentScore}
        />
        <Card 
        onClick={this.handleClick}
       
         />
        <Wrapper />
      </div>
    );
  }
}

export default App;
