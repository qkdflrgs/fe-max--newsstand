export const setAttributes = (element: HTMLElement, attributes: { [key: string]: string } = {}): void => {
  for (const attributeKey in attributes) {
    element.setAttribute(attributeKey, attributes[attributeKey]);
  }
};

export const createElement = (elementName: string, options: { [key: string]: string } = {}): HTMLElement => {
  const element = document.createElement(elementName);
  setAttributes(element, options);
  return element;
};
