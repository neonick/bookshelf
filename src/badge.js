import React, { Component } from 'react'
// import { css } from 'linaria';
import classnames from "classnames"
// import propTypes from "prop-types"

// const header = css`
//   text-transform: uppercase;
// `; 

export default class Badge extends Component {





  getBadge() {
    switch (this.props.type) {
      case "fiction":
        return "художка";
      case "nonfiction":
        return "нон-фикшн";
      case "russian":
        return "на русском";
      case "english":
        return "на английском";
      default:
        return "error";
    }

    
  }

  getStyle() {
    switch (this.props.type) {
      case "fiction":
        return "badge-warning";
      case "nonfiction":
        return "badge-success";
      case "russian":
        return "badge-danger";
      case "english":
        return "badge-primary";
      default:
        return "badge-secondary";
    }


  }

  render() {
    const { pill, className } = this.props;

    return (
      <span
        className={classnames(
          "badge",
          this.getStyle(),
          pill && `badge-pill`,
          className
        )}
      >
        {this.getBadge()}
      </span>
    );
  }
}
