// declare class

// export class using module.exports

import React, { Component } from "react";

class Shape extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.color = "red";
    this.drawShape = this.drawShape.bind(this);
    this.calculateArea = this.calculateArea.bind(this);
  }
  drawShape() {}
  calculateArea() {}
}

export default Shape;
