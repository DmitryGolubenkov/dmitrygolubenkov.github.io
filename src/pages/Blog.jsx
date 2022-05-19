import React, { Component } from "react";

export default class Blog extends Component {
  componentDidMount() {
    document.title = "Блог";
  }

  render() {
    return <div>Blog</div>;
  }
}
