import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  componentDidMount() {
    document.title = "404 Страница не найдена";
  }
  
  render() {
    return (
      <div>
        <div>404 Не найдено :(</div>
        <Link to="/">Вернуться на главную</Link>
      </div>
    );
  }
}
