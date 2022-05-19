import React, { Component } from "react";

export default class About extends Component {
  componentDidMount() {
    document.title = "Обо мне";
  }

  render() {
    return <div>About</div>;
  }
}
