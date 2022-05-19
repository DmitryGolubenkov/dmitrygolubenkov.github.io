import React, { Component } from "react";

export default class Home extends Component {
  componentDidMount() {
    document.title = "Главная";
  }
  
  render() {
    return <div>Home</div>;
  }
}
