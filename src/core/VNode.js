import { uid } from "../utils";

const id = uid();

export default class VNode {
  constructor() {
    this.nodeId = id();
    this.parent = undefined;
    this.nodes = [];
  }

  append(node) {
    node.parent = this;
    this.nodes.push(node);
  }
}
