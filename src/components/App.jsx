import React, { Component } from "react";

// let App =(prop)=>{
//     let props='yo'
//     return (<h1>{props}</h1>)}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "World!!!",
      placeholder: "hello",
      value: " ",
    };
  }
  handleChange(text) {
    this.setState({
      value: text,
      placeholder:'hello'
    });
  }
  handleClick(e) {}

  render() {
    // if (this.state.loaded) {
    // }
    let props = "Hello!";

    return (
      <React.Fragment>
        <h1> {props + " " + this.state.text} </h1>
        <input
          onChange={(event) => this.handleChange(event.target.value)}
          value={this.state.value}
          type="text"
          placeholder={this.state.placeholder}
        />
        <div></div>
        <input onClick={this.handleClick} type="button" value="click" />
      </React.Fragment>
    );
  }
}

export default App;
