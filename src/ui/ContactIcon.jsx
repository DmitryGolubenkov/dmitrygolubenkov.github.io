import React, { Component } from "react";
import "./ContactIcon.css";

export default class ContactIcon extends Component {
  render() {
    return (
      <a href={this.props.link} className="circle">
        {this.props.content}
      </a>
    );
  }
}
