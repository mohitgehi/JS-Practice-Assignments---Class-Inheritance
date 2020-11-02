// import using require

// declare class

// export class using module.exports
import Shape from "./shape";

class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  calculateArea = function () {};
}
export default Circle;
