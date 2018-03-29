import VNode from "./VNode";

export default class Component extends VNode {
  constructor(props = {}) {
    super();
    this.props = props;

    if (props.children !== undefined && props.children !== null) {
      if (props.children instanceof VNode) {
        this.append(props.children);
      } else if (props.children instanceof Array) {
        props.children.forEach(child => {
          if (child instanceof VNode) {
            this.append(child);
          }
        });
      }
    }
  }
}
