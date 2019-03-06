import React, { Component } from "react";
import Badge from "./badge";

export default class BadgeList extends Component {

  returnBadges() {
    let massive = this.props.types.split(", ");
    return massive.map((element, i) => {
      return <Badge className="mr-2" type={element} key={i} />
    });
  }
  
  render() {
    return (
      <div className={this.props.className}>
        {this.returnBadges()}
      </div>
    );
  }
}
