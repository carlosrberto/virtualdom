import { Component, Div, Span, Text, render } from "../src/index.js";

class CustomComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return new Div({
      children: new Text({
        children: "Custom Component"
      })
    });
  }
}

// Example App
const App = new Div({
  children: [
    new Div({
      children: new Div({
        children: new Text({ children: "Hellow World" })
      })
    }),
    new Div({
      children: new Text({ children: "running virtual DOM" })
    }),
    new CustomComponent()
  ]
});

render(App, document.getElementById("root"));
