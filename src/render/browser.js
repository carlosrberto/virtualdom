// Browser Rendering
export const createElement = component => {
  let element;
  if (component.elementType === "text") {
    element = document.createElement("span");
    element.setAttribute("virtualdom-id", component.nodeId);
    element.appendChild(document.createTextNode(component.props.children));
  } else {
    element = document.createElement(component.elementType);
    element.setAttribute("virtualdom-id", component.nodeId);
  }

  return element;
};

export const browserRenderNodes = (component, parentDOMElement) => {
  if (component.render) {
    return browserRenderNodes(component.render(), parentDOMElement);
  }
  const element = createElement(component);
  parentDOMElement.appendChild(element);
  component.nodes.forEach(node => {
    browserRenderNodes(node, element);
  });
};

export const render = (component, targetElement) => {
  browserRenderNodes(component, targetElement);
};
